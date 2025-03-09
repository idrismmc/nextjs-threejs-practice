"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { Wheels, Decks, Metals } from "@/types/types";
type CustomizerControlsContext = {
  selectedWheel?: Wheels;
  setSelectedWheel: (wheel: Wheels) => void;
  selectedDeck?: Decks;
  setSelectedDeck: (deck: Decks) => void;
  selectedTruck?: Metals;
  setSelectedTruck: (truck: Metals) => void;
  selectedBolt?: Metals;
  setSelectedBolt: (bolt: Metals) => void;
};

const defaultContext: CustomizerControlsContext = {
  setSelectedWheel: () => {},
  setSelectedDeck: () => {},
  setSelectedTruck: () => {},
  setSelectedBolt: () => {},
};

const CustomizerControlsContext =
  createContext<CustomizerControlsContext>(defaultContext);

type CustomizerControlsProviderProps = {
  defaultWheel?: Wheels;
  defaultDeck?: Decks;
  defaultTruck?: Metals;
  defaultBolt?: Metals;
  children?: React.ReactNode;
};

export function CustomizerControlsProvider({
  children,
  defaultWheel,
  defaultDeck,
  defaultTruck,
  defaultBolt,
}: CustomizerControlsProviderProps) {
  const [selectedWheel, setSelectedWheel] = useState<Wheels | undefined>(
    defaultWheel
  );
  const [selectedDeck, setSelectedDeck] = useState<Decks | undefined>(
    defaultDeck
  );
  const [selectedTruck, setSelectedTruck] = useState<Metals | undefined>(
    defaultTruck
  );
  const [selectedBolt, setSelectedBolt] = useState<Metals | undefined>(
    defaultBolt
  );
  const value = useMemo<CustomizerControlsContext>(() => {
    return {
      selectedWheel,
      setSelectedWheel,
      selectedDeck,
      setSelectedDeck,
      selectedTruck,
      setSelectedTruck,
      selectedBolt,
      setSelectedBolt,
    };
  }, [selectedWheel, selectedDeck, selectedTruck, selectedBolt]);

  return (
    <CustomizerControlsContext.Provider value={value}>
      {children}
    </CustomizerControlsContext.Provider>
  );
}

export function useCustomizerControls() {
  return useContext(CustomizerControlsContext);
}
