import { useMemo } from "react";
import ExternalLinkButton from "./external-link-button";
import ExternalLinkTag from "./external-link-tag";

const PlatformAndSampleButtons = ({
  androidSample,
  multiplatformSample,
  component,
}: {
  androidSample?: string;
  multiplatformSample?: string;
  component?: string;
}) => {
  const repo = "https://github.com/nomanr/lumo-ui/tree/kmp-support/";
  const componentsDir = `${repo}/lumo-ui/components-lab/src/commonMain/kotlin/com/nomanr/lumo/ui/components/`;
  const nativeComponentsDir = `${repo}/lumo-ui/components-lab/src/androidMain/kotlin/com/nomanr/lumo/ui/components/native/`;
  const androidSamplesDir = `${repo}/sample-android/catalogue/src/main/java/com/nomanr/sample/ui/sample/samples/`;
  const multiplatformSamplesDir = `${repo}/sample-multiplatform/catalogue/common/src/commonMain/kotlin/com/nomanr/lumo/multiplatform/sample/sample/samples/`;

  const componentLink = useMemo(() => {
    if (!component) {
      return null;
    }

    if (!multiplatformSample) {
      return `${nativeComponentsDir}/${component}`;
    }
    return `${componentsDir}/${component}`;
  }, [multiplatformSample]);

  const androidSampleLink = androidSample
    ? `${androidSamplesDir}/${androidSample}`
    : null;

  const multiplatformSampleLink = multiplatformSample
    ? `${multiplatformSamplesDir}/${multiplatformSample}`
    : null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "8px",
      }}
    >
      <div style={{ display: "flex", gap: "8px" }}>
        {androidSampleLink && (
          <ExternalLinkTag text="Android" href={`${androidSampleLink}`} />
        )}
        {multiplatformSampleLink && (
          <ExternalLinkTag
            text="Compose Multiplatform"
            href={`${multiplatformSampleLink}`}
          />
        )}
      </div>

      {componentLink && (
        <ExternalLinkButton text="Source Code" href={componentLink} />
      )}
    </div>
  );
};

export default PlatformAndSampleButtons;
