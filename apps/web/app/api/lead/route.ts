import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations";
import { saveLead } from "@/lib/storage";
import type { Lead } from "@/types/lead";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = leadSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.issues },
        { status: 422 },
      );
    }

    const lead: Lead = {
      ...parsed.data,
      createdAt: new Date().toISOString(),
      source: "landing",
    };

    await saveLead(lead);

    console.log(
      JSON.stringify({
        event: "lead_created",
        createdAt: lead.createdAt,
        source: lead.source,
        cidadeUF: lead.cidadeUF,
        faixaOrcamento: lead.faixaOrcamento,
      }),
    );

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("lead_api_error", error);
    return NextResponse.json(
      { ok: false, message: "Não foi possível salvar seu cadastro." },
      { status: 500 },
    );
  }
}
