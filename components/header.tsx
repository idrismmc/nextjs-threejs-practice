import Link from "next/link";
import React from "react";
import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/data";

export function Header() {
  return (
    <header className="absolute header left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 md:h-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
        <Link href="/" className="justify-self-start">
          <Logo className="text-brand-purple ~h-12/20" />
        </Link>
        <nav
          aria-label="Main"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="flex flex-wrap items-center justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="~text-lg/xl">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="justify-self-end ">
          <ButtonLink href="/" icon="cart" color="purple">
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Cart (1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
