import Script from "next/script";

const Umami = () => {
  return (
    <>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="510c18cc-d810-4543-b266-5701963fce76"
      />
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="e0246331-62a7-499b-8e87-7446c05285db"
      />
    </>
  );
};

export default Umami;
