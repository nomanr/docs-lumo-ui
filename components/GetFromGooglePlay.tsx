import Image from "next/image";

export default function GetFromGooglePlay() {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.nomanr.lumo.sample"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/google-play.png"
        alt="Get it on Google Play"
        width={130}
        height={40}
        priority
      />
    </a>
  );
}
