import Image from "next/image";

export default function DownloadAPK() {
  return (
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
  );
}
