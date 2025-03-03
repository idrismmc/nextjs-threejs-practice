import { ButtonLink } from "@/components/button-link";
import { HorizontalLine, VerticalLine } from "@/components/line";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { Scribble } from "@/sections/product-grid/scribble";

type SkateboardProductProps = {
  id: string;
  src: string;
  price: number;
  name: string;
  color: string;
};

const VERTICAL_LINE_CLASSES =
  "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

const HORIZONTAL_LINE_CLASSES =
  "-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";
const SkateboardProduct = ({
  id,
  src,
  price,
  name,
  color,
}: SkateboardProductProps) => {
  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4">
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "left-4")} />
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "right-4")} />
      <HorizontalLine className={clsx(HORIZONTAL_LINE_CLASSES)} />
      <div className="flex items-center justify-between ~text-sm/2xl">
        <span>${price}</span>
        <span className="inline-flex items-center gap-1">
          <span>
            <FaStar className="text-yellow-400" /> 37
          </span>
        </span>
      </div>
      <div className="-mb-1 overflow-hidden py-4">
        <Scribble className="absolute inset-0 h-full w-full" color={color} />
        <Image
          src={src}
          alt=""
          width={150}
          height={150}
          className="mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
        />
      </div>
      <HorizontalLine className={clsx(HORIZONTAL_LINE_CLASSES)} />

      <h3 className="my-2 text-center font-sans leading-tight ~text-lg/xl">
        {name}
      </h3>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ButtonLink href="/">Customize</ButtonLink>
      </div>
    </div>
  );
};

export default SkateboardProduct;
