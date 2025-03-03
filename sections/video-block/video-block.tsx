import { Bounded } from "@/components/bounded";
import { LazyYTPlayer } from "./lazy-yt-player";
import clsx from "clsx";
import Image from "next/image";

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";
const VideoBlock = () => {
  return (
    <Bounded className="bg-texture bg-zinc-900">
      <h2 className="sr-only">Video Reel</h2>
      <div className="relative aspect-video">
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-brand-lime absolute inset-0 ~translate-x-2/3 ~translate-y-2/3"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-white absolute inset-0 ~translate-x-1/3 ~translate-y-1/2"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-brand-white absolute inset-0 ~translate-x-1/2 ~-translate-y-1/3"
          )}
        />
        <div className={clsx(MASK_CLASSES, "relative h-full")}>
          <LazyYTPlayer youTubeID="44I29krtxaw" />
          <Image
            src="/image-texture.png"
            alt=""
            fill
            className="pointer-events-none object-cover opacity-50"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default VideoBlock;
