import Image from "next/image";

export default function DemoLink() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center",
      }}
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.nomanr.lumo.sample"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/google-play.png"
          alt="Get it on Google Play"
          width={300}
          height={1000}
          priority
        />
      </a>

      <a
        href="https://lumo.nomanr.com/lumo-ui.apk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/download-apk.png"
          alt="Download APK"
          width={300}
          height={1000}
          priority
        />
      </a>
    </div>
  );
}
