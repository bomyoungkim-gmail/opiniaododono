const stages = [
  { name: "Demolição", status: "done" },
  { name: "Hidráulica", status: "progress" },
  { name: "Revestimento", status: "future" },
  { name: "Pintura", status: "future" },
] as const;

function statusClass(status: (typeof stages)[number]["status"]) {
  if (status === "done") return "bg-brand-emerald";
  if (status === "progress") return "bg-brand-cobalt";
  return "bg-slate-300";
}

export function StageProgress() {
  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <p className="mb-4 text-sm font-semibold text-brand-navy">
        Exemplo de etapas
      </p>
      <ol className="grid gap-3 md:grid-cols-4" aria-label="Progresso da obra">
        {stages.map((stage, index) => (
          <li key={stage.name} className="flex items-center gap-3">
            <span
              className={`h-3 w-3 rounded-full transition-all duration-300 ${statusClass(stage.status)}`}
              aria-hidden="true"
            />
            <span className="text-sm text-slate-700">{stage.name}</span>
            {index < stages.length - 1 ? (
              <span
                className="hidden h-px flex-1 bg-slate-200 md:block"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
