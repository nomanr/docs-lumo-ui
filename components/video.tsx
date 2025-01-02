import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface VideoProps {
  src: string;
  caption?: string;
  ratio: number;
  thumbnail?: string;
}

export default function Video({ src, caption, ratio, thumbnail }: VideoProps) {
  const [inViewRef, inView] = useInView({ threshold: 1 });
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);

  const setRefs = useCallback(
    (node: HTMLVideoElement | null) => {
      videoRef.current = node;
      inViewRef(node);

      if (node) {
        node.addEventListener("click", function () {
          if (this.paused) {
            this.play();
          } else {
            this.pause();
          }
        });
      }
    },
    [inViewRef]
  );

  useEffect(() => {
    if (!videoRef?.current) {
      return;
    }

    if (inView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [inView]);

  return (
    <div
      style={{
        position: "relative",
        margin: "2rem 1rem",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      <div style={{ paddingBottom: ratio * 100 + "%" }} />

      <video
        loop
        muted
        autoPlay
        playsInline
        ref={setRefs}
        style={{ borderRadius: "8px" }}
        poster={"/images/placeholder.png"}
        onPlaying={() => setLoading(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </div>
      )}
      {caption && (
        <figcaption style={{ fontSize: ".9rem", textAlign: "center" }}>
          {caption}
        </figcaption>
      )}
    </div>
  );
}

const Spinner = () => {
  useEffect(() => {
    const spinnerStyles = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;

    const styleSheet = document.createElement("style");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.innerText = spinnerStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div
      className="spinner"
      style={{
        width: "24px",
        height: "24px",
        border: "4px solid rgba(0, 0, 0, 0.1)",
        borderTop: "4px solid #000",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
  );
};
