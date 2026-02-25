declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type TrackEvent =
  | { name: "page_view"; props: { page: string } }
  | {
      name: "cta_click";
      props: { variant: "primary" | "secondary"; section: string };
    }
  | { name: "form_start"; props: Record<string, never> }
  | { name: "lead_submit"; props: Record<string, never> }
  | { name: "lead_success"; props: { faixaOrcamento: string } }
  | {
      name: "lead_error";
      props: { stage: "client" | "server"; code?: string };
    };

export function track(event: TrackEvent) {
  const { name, props } = event;

  if (process.env.NODE_ENV === "development") {
    console.log("[track]", name, props);
  }

  if (
    typeof window !== "undefined" &&
    typeof window.gtag === "function" &&
    process.env.NEXT_PUBLIC_GA_ID
  ) {
    window.gtag("event", name, props);
  }
}
