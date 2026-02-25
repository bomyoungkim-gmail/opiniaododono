import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import type { Lead } from "@/types/lead";

export async function saveLeadJsonl(lead: Lead) {
  const filePath = process.env.LEADS_FILE || "/data/leads.jsonl";
  await mkdir(dirname(filePath), { recursive: true });
  await appendFile(filePath, `${JSON.stringify(lead)}\n`, "utf8");
}
