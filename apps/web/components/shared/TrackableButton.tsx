"use client";

import { track } from "@/lib/analytics";
import { Button, type ButtonProps } from "@/components/ui/button";

interface TrackableButtonProps extends ButtonProps {
  variantName: "primary" | "secondary";
  section: string;
}

export function TrackableButton({
  variantName,
  section,
  onClick,
  ...props
}: TrackableButtonProps) {
  return (
    <Button
      onClick={(event) => {
        track({
          name: "cta_click",
          props: { variant: variantName, section },
        });
        onClick?.(event);
      }}
      {...props}
    />
  );
}
