import type { Lead } from "@/types/lead";
import { saveLeadJsonl } from "@/lib/storage/jsonl";
import { saveLeadWebhook } from "@/lib/storage/webhook";
import { saveLeadSupabase } from "@/lib/storage/supabase";

type StorageAdapter = (lead: Lead) => Promise<void>;

const adapters: Record<string, StorageAdapter> = {
  jsonl: saveLeadJsonl,
  webhook: saveLeadWebhook,
  supabase: saveLeadSupabase,
};

export async function saveLead(lead: Lead) {
  const adapterName = process.env.STORAGE_ADAPTER ?? "jsonl";
  const adapter = adapters[adapterName] ?? adapters.jsonl;
  await adapter(lead);
}
