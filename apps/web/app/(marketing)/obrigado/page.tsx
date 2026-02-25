import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-brand-surface px-4 py-16">
      <div className="mx-auto max-w-xl rounded-card border border-slate-200 bg-white p-8 text-center shadow-card">
        <ShieldCheck
          className="mx-auto mb-4 h-10 w-10 text-brand-emerald"
          aria-hidden="true"
        />
        <h1 className="text-3xl font-semibold text-brand-navy">Pronto!</h1>
        <p className="mt-3 text-slate-600">
          Vamos te chamar quando abrirmos o piloto na sua região.
        </p>
        <Button asChild size="lg" className="mt-8 h-14 w-full md:w-auto">
          <Link href="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    </main>
  );
}
