"use client";

import { useEffect } from "react";

export const Spinner = () => {
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
