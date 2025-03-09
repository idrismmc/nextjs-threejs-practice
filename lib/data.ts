export const navLinks = [
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Customizer",
    href: "/customizer",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const products = [
  {
    id: "1",
    name: "Oni Mask",
    price: 100,
    image: "/images/onimask-complete.png",
    color: "#b75648",
    href: "/build?wheel=cream&deck=oni-mask&truck=black&bolt=black",
  },
  {
    id: "2",
    name: "Yellow & Black",
    price: 100,
    image: "/images/black-yellow-complete.png",
    color: "#e7e71f",
    href: "/build?deck=black-and-yellow&wheel=black&truck=yellow&bolt=black",
  },
  {
    id: "3",
    name: "Pink Drop",
    price: 100,
    image: "/images/pink-drop-complete.png",
    color: "#f37eda",
    href: "/build?deck=pink-swirl&wheel=cream&truck=silver&bolt=silver",
  },
  {
    id: "4",
    name: "Thank You",
    price: 100,
    image: "/images/thank-you-complete.png",
    color: "#de5a84",
    href: "/build?deck=thank-you-deck&wheel=red&truck=silver&bolt=silver",
  },
];

export const textAndImage = [
  {
    theme: "Blue",
    heading: "Crafted for the kickflip",
    text: "Built for big tricks and hard landings, our boards are designed to handle every flip, grind, and bail. Perfect balance, every time.",
    foregroundImage: "/images/guy-1.png",
    backgroundImage: "/images/paint-background.png",
  },
  {
    theme: "Orange",
    heading: "Not just a deck, it's your canvas",
    text: "Each board is a canvas for expression, crafted for those who treat the backstreets as their own art gallery.",
    foregroundImage: "/images/guy-2.png",
    backgroundImage: "/images/paint-background.png",
  },
  {
    theme: "Navy",
    heading: "Built for hard landings",
    text: "Skateboarding isn't always smooth. Our boards are built tough to survive the scuffs, scratches, and slams that come with real skating.",
    foregroundImage: "/images/guy-3.png",
    backgroundImage: "/images/paint-background.png",
  },
  {
    theme: "Lime",
    heading: "Fueling the next generation",
    text: "We're committed to supporting young skaters and DIY projects, giving back to the communities that keep skateboarding alive and evolving.",
    foregroundImage: "/images/guy-4.png",
    backgroundImage: "/images/paint-background.png",
  },
];

export const team = [
  {
    firstName: "Carter",
    lastName: "Bell",
    imageForeground: "/images/carter-front.png",
    imageBackground: "/images/carter-back.png",
    href: "/build?deck=grid-streaks&wheel=black&truck=black&bolt=black",
  },
  {
    firstName: "Dylan",
    lastName: "Foster",
    imageForeground: "/images/dylan-front.png",
    imageBackground: "/images/dylan-back.png",
    href: "/build?deck=grid-streaks&wheel=black&truck=black&bolt=black",
  },
  {
    firstName: "Sophie",
    lastName: "Castillo",
    imageForeground: "/images/sophie-front.png",
    imageBackground: "/images/sophie-back.png",
    href: "/build?deck=grid-streaks&wheel=black&truck=black&bolt=black",
  },
  {
    firstName: "Jordan",
    lastName: "Lee",
    imageForeground: "/images/jordan-front.png",
    imageBackground: "/images/jordan-back.png",
    href: "/build?deck=grid-streaks&wheel=black&truck=black&bolt=black",
  },
];

const customizerColors = {
  black: "#333333",
  steel: "#6F6E6A",
  asphalt: "#34495E",
  gold: "#DEB887",
  silver: "#EEEEEE",
  red: "#E84118",
  blue: "#068BD3",
  lime: "#A6E22E",
  yellow: "#F1C40F",
  purple: "#8E44AD",
  raspberry: "#BA3763",
  pink: "#F1396E",
};

export const customizerData = {
  wheels: [
    {
      uid: "cream",
      image: "/images/wheel-cream.png",
    },
    {
      uid: "black",
      image: "/images/wheel-black.png",
    },
    {
      uid: "blue",
      image: "/images/wheel-blue.png",
    },
    {
      uid: "green",
      image: "/images/wheel-green.png",
    },
    {
      uid: "navy",
      image: "/images/wheel-navy.png",
    },
    {
      uid: "pink",
      image: "/images/wheel-pink.png",
    },
    {
      uid: "purple",
      image: "/images/wheel-purple.png",
    },
    {
      uid: "red",
      image: "/images/wheel-red.png",
    },
    {
      uid: "yellow",
      image: "/images/wheel-yellow.png",
    },
  ],
  decks: [
    {
      uid: "against-the-tide",
      image: "/images/against-the-tide.png",
    },
    {
      uid: "black-and-yellow",
      image: "/images/black-and-yellow.png",
    },
    {
      uid: "gray-and-black",
      image: "/images/gray-and-black.png",
    },
    {
      uid: "green-and-navy",
      image: "/images/green-and-navy.png",
    },
    {
      uid: "oni-mask",
      image: "/images/OniMask.png",
    },
    {
      uid: "red-and-black",
      image: "/images/red-and-black.png",
    },
    {
      uid: "red-and-white",
      image: "/images/red-and-white.png",
    },
    {
      uid: "thank-you-deck",
      image: "/images/thank-you-deck.png",
    },
    {
      uid: "yellow-and-black",
      image: "/images/yellow-and-black.png",
    },
    {
      uid: "grid-streaks",
      image: "/images/grid-streaks.png",
    },
    {
      uid: "pink-swirl",
      image: "/images/PinkSwirl.png",
    },
  ],
  metals: [
    {
      uid: "black",
      color: customizerColors.black,
    },
    {
      uid: "steel",
      color: customizerColors.steel,
    },
    {
      uid: "asphalt",
      color: customizerColors.asphalt,
    },
    {
      uid: "blue",
      color: customizerColors.blue,
    },
    {
      uid: "silver",
      color: customizerColors.silver,
    },
    {
      uid: "gold",
      color: customizerColors.gold,
    },
    {
      uid: "lime",
      color: customizerColors.lime,
    },
    {
      uid: "red",
      color: customizerColors.red,
    },
    {
      uid: "purple",
      color: customizerColors.purple,
    },
    {
      uid: "yellow",
      color: customizerColors.yellow,
    },
    {
      uid: "raspberry",
      color: customizerColors.raspberry,
    },
    {
      uid: "pink",
      color: customizerColors.pink,
    },
  ],
};
