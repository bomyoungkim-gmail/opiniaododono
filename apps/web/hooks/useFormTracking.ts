"use client";

import { useRef } from "react";
import { track } from "@/lib/analytics";

export function useFormTracking() {
  const hasStarted = useRef(false);

  const markFormStart = () => {
    if (!hasStarted.current) {
      hasStarted.current = true;
      track({ name: "form_start", props: {} });
    }
  };

  const markLeadSubmit = () => {
    track({ name: "lead_submit", props: {} });
  };

  const markLeadSuccess = (faixaOrcamento: string) => {
    track({ name: "lead_success", props: { faixaOrcamento } });
  };

  const markLeadError = (stage: "client" | "server", code?: string) => {
    track({ name: "lead_error", props: { stage, code } });
  };

  return { markFormStart, markLeadSubmit, markLeadSuccess, markLeadError };
}
