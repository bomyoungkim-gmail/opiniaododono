"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShieldCheck } from "lucide-react";
import { TrackableButton } from "@/components/shared/TrackableButton";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-navy"
        >
          <ShieldCheck
            className="h-5 w-5 text-brand-cobalt"
            aria-hidden="true"
          />
          <span className="font-semibold">Milestone</span>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Navegação principal"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-brand-cobalt cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <TrackableButton
            variantName="primary"
            section="header"
            size="default"
            asChild
          >
            <a href="#formulario">Entrar na lista</a>
          </TrackableButton>
        </nav>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <nav className="mt-8 flex flex-col gap-4" aria-label="Navegação mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <TrackableButton
            variantName="primary"
            section="header-mobile"
            size="lg"
            asChild
            onClick={() => setOpen(false)}
          >
            <a href="#formulario">Entrar na lista</a>
          </TrackableButton>
        </nav>
      </Sheet>
    </header>
  );
}
