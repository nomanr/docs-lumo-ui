import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface VideoProps {
  src: string;
  caption?: string;
  poster?: string;
  controls?: boolean;
  preload?: string;
  style?: React.CSSProperties;
  showControlsOnClick?: boolean;
}

export default function Video({
  src,
  caption,
  poster,
  controls = false,
  preload = "auto",
  style,
  showControlsOnClick = false,
}: VideoProps) {
  const [inViewRef, inView] = useInView({ threshold: 1 });
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [showControls, setShowControls] = useState(controls);

  const setRefs = useCallback(
    (node: HTMLVideoElement | null) => {
      videoRef.current = node;
      inViewRef(node);

      if (node && !showControlsOnClick) {
        node.addEventListener("click", function () {
          if (this.paused) {
            this.play();
          } else {
            this.pause();
          }
        });
      }

      if (node && showControlsOnClick) {
        node.addEventListener("click", function () {
          setShowControls(true);
        });
      }
    },
    [inViewRef, showControlsOnClick]
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
        ...style,
        position: "relative",
        marginTop: "1.5rem",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <video
        loop={!showControls}
        muted={!showControls}
        autoPlay={!showControls}
        playsInline
        controls={showControls}
        preload={preload}
        ref={setRefs}
        poster={poster}
        onPlaying={() => setLoading(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {loading && !showControls && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
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
