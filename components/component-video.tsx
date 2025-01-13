import { FC } from "react";
import Video from "./video";

interface ComponentVideoProps {
  componentName: string;
}

const ComponentVideo: FC<ComponentVideoProps> = ({ componentName }) => {
  const videoSrc = `https://github.com/nomanr/docs-lumo-ui/raw/refs/heads/main/.github/videos/${componentName.toLowerCase()}.mp4`;

  return <Video src={videoSrc} poster={`/images/placeholder.png`} />;
};

export default ComponentVideo;
