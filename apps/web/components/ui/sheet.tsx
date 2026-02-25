"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Sheet({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label="Fechar menu"
        className="absolute inset-0 bg-black/30"
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-lg",
        )}
      >
        {children}
      </div>
    </div>
  );
}
