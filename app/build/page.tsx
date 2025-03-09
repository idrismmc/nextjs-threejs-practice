import { ButtonLink } from "@/components/button-link";
import { Heading } from "@/components/heading";
import { Logo } from "@/components/logo";
import Link from "next/link";
import React from "react";
import { CustomizerControlsProvider } from "@/app/build/context";
import { customizerData } from "@/lib/data";
import Preview from "@/app/build/preview";
import Controls from "@/app/build/controls";
import Loading from "@/app/build/loading";

type SearchParams = {
  wheel?: string;
  deck?: string;
  truck?: string;
  bolt?: string;
};

type Props = {};

export default async function page(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  const { wheels, decks, metals } = customizerData;
  const defaultWheel = wheels.find((wheel) => wheel.uid === searchParams.wheel);
  const defaultDeck = decks.find((deck) => deck.uid === searchParams.deck);
  const defaultTruck = metals.find((metal) => metal.uid === searchParams.truck);
  const defaultBolt = metals.find((metal) => metal.uid === searchParams.bolt);

  const wheelTextureURLs = wheels.map((wheel) => wheel.image);
  const deckTextureURLs = decks.map((deck) => deck.image);

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <CustomizerControlsProvider
        defaultWheel={defaultWheel}
        defaultDeck={defaultDeck}
        defaultTruck={defaultTruck}
        defaultBolt={defaultBolt}
      >
        <div className="relative aspect-square shrink-0 bg-[#3a414a] lg:aspect-auto lg:grow">
          <div className="absolute inset-0">
            <Preview
              wheelTextureURLs={wheelTextureURLs}
              deckTextureURLs={deckTextureURLs}
            />
          </div>
          <Link href="/" className="absolute left-6 top-6">
            <Logo className="h-12 text-white" />
          </Link>
        </div>
        <div className="grow bg-texture bg-zinc-900 text-white ~p-4/6 lg:shrink-0 lg:w-96 lg:grow-0 ">
          <Heading as="h1" size="sm" className="mb-6 mt-0">
            Build your board
          </Heading>
          <Controls
            wheels={wheels}
            decks={decks}
            metals={metals}
            className="mb-6"
          />
          <ButtonLink href="" color="lime" icon="plus">
            Add to card
          </ButtonLink>
        </div>
      </CustomizerControlsProvider>
      <Loading />
    </div>
  );
}
