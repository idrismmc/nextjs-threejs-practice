"use client";

import { useCustomizerControls } from "@/app/build/context";
import { Heading } from "@/components/heading";
import { Decks, Metals, Wheels } from "@/types/types";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ComponentProps, ReactNode, useEffect } from "react";

type Props = {
  wheels: Wheels[];
  decks: Decks[];
  metals: Metals[];
  className?: string;
};

export default function Controls({ wheels, decks, metals, className }: Props) {
  const router = useRouter();
  const {
    setSelectedBolt,
    setSelectedDeck,
    setSelectedTruck,
    setSelectedWheel,
    selectedBolt,
    selectedDeck,
    selectedTruck,
    selectedWheel,
  } = useCustomizerControls();

  useEffect(() => {
    const url = new URL(window.location.href);

    if (selectedWheel?.uid) {
      url.searchParams.set("wheel", selectedWheel.uid);
    }
    if (selectedDeck?.uid) {
      url.searchParams.set("deck", selectedDeck.uid);
    }
    if (selectedTruck?.uid) {
      url.searchParams.set("truck", selectedTruck.uid);
    }
    if (selectedBolt?.uid) {
      url.searchParams.set("bolt", selectedBolt.uid);
    }

    router.replace(url.href);
  }, [router, selectedWheel, selectedDeck, selectedTruck, selectedBolt]);
  return (
    <div className={clsx("flex flex-col gap-6", className)}>
      <Options title="Deck" selectedName={selectedDeck?.uid}>
        {decks.map((deck) => (
          <Option
            key={deck.uid}
            selected={selectedDeck?.uid === deck.uid}
            onClick={() => setSelectedDeck(deck)}
            image={deck.image}
          >
            {deck.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Wheels" selectedName={selectedWheel?.uid}>
        {wheels.map((wheel) => (
          <Option
            key={wheel.uid}
            selected={selectedWheel?.uid === wheel.uid}
            onClick={() => setSelectedWheel(wheel)}
            image={wheel.image}
          >
            {wheel.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Trucks" selectedName={selectedTruck?.uid}>
        {metals.map((metal) => (
          <Option
            key={metal.uid}
            selected={selectedTruck?.uid === metal.uid}
            onClick={() => setSelectedTruck(metal)}
            // image={metal.image}
            color={metal.color}
          >
            {metal.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Bolts" selectedName={selectedBolt?.uid}>
        {metals.map((metal) => (
          <Option
            key={metal.uid}
            selected={selectedBolt?.uid === metal.uid}
            onClick={() => setSelectedBolt(metal)}
            color={metal.color}
          >
            {metal.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
    </div>
  );
}

type OptionsProps = {
  title?: ReactNode;
  selectedName?: string;
  children: ReactNode;
};

function Options({ title, selectedName, children }: OptionsProps) {
  const formattedName = selectedName?.replace(/-/g, " ");
  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        <Heading as="h2" size="xs" className="mb-2">
          {title}
        </Heading>
        <p className="ml-3 text-zinc-300">
          <span className="select-none text-zinc-500">| </span>
          {formattedName}
        </p>
      </div>
      <ul className="mb-1 flex flex-wrap gap-2">{children}</ul>
    </div>
  );
}

type OptionProps = Omit<ComponentProps<"button">, "children"> & {
  selected: boolean;
  children: ReactNode;
  onClick: () => void;
} & (
    | {
        image: string;
        color?: never;
      }
    | {
        color: string;
        image?: never;
      }
  );

function Option({
  selected,
  children,
  image,
  color,
  onClick,
  ...props
}: OptionProps) {
  return (
    <li>
      <button
        className={clsx(
          "size-10 cursor-pointer rounded-full bg-black p-0.5 outline-2 outline-white",
          selected && "outline"
        )}
        onClick={onClick}
        {...props}
      >
        {image ? (
          <Image
            src={image}
            alt=""
            className="pointer-events-none h-full w-full rounded-full"
            height={150}
            width={150}
          />
        ) : (
          <div
            className="h-full w-full rounded-full"
            style={{ backgroundColor: color }}
          />
        )}

        <span className="sr-only">{children}</span>
      </button>
    </li>
  );
}
