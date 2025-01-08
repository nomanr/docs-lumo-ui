import ExternalLinkTag from "./external-link-tag";
import { useConfig } from "nextra-theme-docs";
import { useThemeConfig } from "nextra-theme-docs";

const SourceCodeTag = ({
  componentName,
  style,
}: {
  componentName: string;
  style?: React.CSSProperties;
}) => {
  const { project } = useThemeConfig();

  const externalLink = `${project?.link}/blob/main/lumo-ui/components-lab/src/main/java/com/nomanr/lumo/ui/components/${componentName}`;

  return (
    <ExternalLinkTag
      text="Source code"
      style={{ ...style, marginTop: 4 }}
      href={externalLink}
    />
  );
};

export default SourceCodeTag;
