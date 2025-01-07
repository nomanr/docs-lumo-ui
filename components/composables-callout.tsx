import { Callout } from "nextra/components";

export default function ComposablesCallout() {
  return (
    <>
      <Callout>
        Components with complex implementation are provided via the{" "}
        <a href="/composables" style={{ textDecoration: "underline" }}>
          composables
        </a>{" "}
        library.
      </Callout>
    </>
  );
}
