import Image from "next/image";
import { Logo } from "@/components/logo";
import { Bounded } from "@/components/bounded";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { FooterPhysics } from "@/components/footer-physics";

const boardTextureURLs = [
  "/images/black-yellow-complete.png",
  "/images/gray-black-complete.png",
  "/images/green-navy-complete.png",
  "/images/grid-streaks-complete.png",
  "/images/onimask-complete.png",
  "/images/pink-drop-complete.png",
  "/images/red-black-complete.png",
  "/images/red-white-complete.png",
];

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-texture bg-zinc-900 text-white overflow-hidden">
      <div className="relative h-[75vh] ~p-10/16 md:aspect-auto border-2">
        <Image
          src="/images/pexels-artempodrez-4816744.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <FooterPhysics
          boardTextureURLs={boardTextureURLs}
          className="absolute inset-0 overflow-hidden"
        />
        <Logo className="pointer-events-none relative h-20 mix-blend-exclusion md:h-28" />
      </div>
      <Bounded as="nav">
        <ul className="flex flex-wrap justify-center gap-8 ~text-lg/xl">
          {navLinks.map((link) => (
            <li key={link.href} className="hover:underline">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </Bounded>
    </footer>
  );
}
