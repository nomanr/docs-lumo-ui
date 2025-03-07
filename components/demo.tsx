"use client";

import { useEffect, useRef, useState } from "react";

interface DemoProps {
  componentId: string;
}

export default function Demo({ componentId }: DemoProps) {
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = "https://nomanr.github.io/lumo-ui";
  const url = `${baseUrl}/?componentId=${componentId}&noBackButton`;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "0.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          marginTop: "-5.5rem",
          marginBottom: "-5.5rem",

          aspectRatio: "420/870",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          border: "0.65rem solid #000",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          borderRadius: "2rem",
          transform: `scale(0.7)`,
          transformOrigin: "center",
          overflow: "hidden",
        }}
      >
        {isLoading && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "1.5rem",
              zIndex: 1,
            }}
          >
            <Spinner />
          </div>
        )}
        <iframe
          id="demoIframe"
          src={url}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1.5rem",
          }}
          onLoad={() => {
            setIsLoading(false);
          }}
        />
      </div>
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
        border: "4px solid rgba(255, 255, 255, 0.1)",
        borderTop: "4px solid #000",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
  );
};
