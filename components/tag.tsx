import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Tag = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  const { theme } = useTheme();
  const [tagClass, setTagClass] = useState("nextra-tag-light");

  useEffect(() => {
    setTagClass(theme === "dark" ? "nextra-tag-dark" : "nextra-tag-light");
  }, [theme]);

  return (
    <div
      className={tagClass}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const TagContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        marginTop: "8px",
      }}
    >
      {children}
    </div>
  );
};

export default Tag;
