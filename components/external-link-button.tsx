import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ExternalLinkButton = ({
  text,
  style,
  href,
}: {
  text: string;
  style?: React.CSSProperties;
  href?: string;
}) => {
  const { resolvedTheme } = useTheme();
  const [linkClass, setLinkClass] = useState("nextra-external-link-light");

  useEffect(() => {
    setLinkClass(
      resolvedTheme === "dark"
        ? "nextra-external-link-dark"
        : "nextra-external-link-light"
    );
  }, [resolvedTheme]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...style,
        textDecoration: "underline",
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <div className={linkClass}>{text}</div>
      <svg
        fill="currentColor"
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
        />
      </svg>
    </a>
  );
};

export default ExternalLinkButton;
