import { ButtonLink } from "@/components/button-link";
import Image from "next/image";
import React from "react";
import { SkaterScribble } from "./skater-scribble";
import clsx from "clsx";

type Props = {
  imageForeground: string;
  imageBackground: string;
  firstName: string;
  lastName: string;
  index: number;
  href: string;
};

export default function Skater({
  imageForeground,
  imageBackground,
  firstName,
  lastName,
  index,
  href,
}: Props) {
  const colors = [
    "text-brand-blue",
    "text-brand-lime",
    "text-brand-orange",
    "text-brand-pink",
    "text-brand-purple",
  ];

  const scribbleColor = colors[index % colors.length];
  return (
    <div className="skater group relative flex flex-col items-center gap-4">
      <div className="stack-layout overflow-hidden">
        <Image
          src={imageBackground}
          width={500}
          height={500}
          alt=""
          className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[0.8]"
        />
        <SkaterScribble className={clsx("relative", scribbleColor)} />
        <Image
          src={imageForeground}
          width={500}
          height={500}
          quality={20}
          alt=""
          className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent" />
        <h3 className="relative grid place-self-end justify-self-start p-2 font-sans text-brand-gray ~text-2xl/3xl">
          <span className="mb-[-0.3rem] block">{firstName}</span>
          <span className="block">{lastName}</span>
        </h3>
      </div>
      <ButtonLink href={href} size="sm">
        Build their board
      </ButtonLink>
    </div>
  );
}
