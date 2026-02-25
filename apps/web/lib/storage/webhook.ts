import type { Lead } from "@/types/lead";

export async function saveLeadWebhook(_lead: Lead) {
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(_lead),
    cache: "no-store",
  });
}
