"use client";

import { Bounded } from "@/components/bounded";
import { Heading } from "@/components/heading";
import { ButtonLink } from "@/components/button-link";
import { WideLogo } from "@/sections/hero/wide-logo";
import { TallLogo } from "@/sections/hero/tall-logo";
import InteractiveSkateboard from "@/sections/hero/interactive-skateboard";

const DEFAULT_DECK_TEXTURE = "/images/gray-and-black.png";
const DEFAULT_WHEEL_TEXTURE = "/images/wheel-green.png";
const DEFAULT_TRUCK_COLOR = "#6F6E6A";
const DEFAULT_BOLT_COLOR = "#6F6E6A";

const Hero = () => {
  return (
    <Bounded className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture">
      <div className="absolute inset-0 flex items-center pt-20">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden" />
      </div>
      <div className="grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-[1fr,auto] px-6 ~py-10/16 place-items-end">
        <Heading size="lg" className="relative max-w-2xl place-self-start">
          Escape the Cul-de-sac
        </Heading>
        <div className="flex relative justify-between w-full flex-col lg:flex-row ~gap-2/4">
          <p className="max-w-[45ch] font-semibold ~text-lg/xl">
            Not just a board, your board. Design a board that's as real as the
            places you take it.
          </p>
          <ButtonLink
            href="/"
            icon="skateboard"
            size="lg"
            className="z-20 mt-2 block"
          >
            Build Your Board
          </ButtonLink>
        </div>
      </div>
      <InteractiveSkateboard
        deckTextureURL={DEFAULT_DECK_TEXTURE}
        wheelTextureURL={DEFAULT_WHEEL_TEXTURE}
        truckColor={DEFAULT_TRUCK_COLOR}
        boltColor={DEFAULT_BOLT_COLOR}
      />
    </Bounded>
  );
};

export default Hero;
