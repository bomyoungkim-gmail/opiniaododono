export function HeroIllustration() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      {/* Header strip */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-brand-surface px-5 py-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Como seu dinheiro é protegido
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Protegido
        </span>
      </div>

      {/* Flow — stacks vertically on mobile, 3-col on sm+ */}
      <div className="grid grid-cols-1 divide-y divide-slate-100 px-0 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {/* Client */}
        <div className="flex flex-col items-center gap-2 px-3 py-5 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" stroke="#2563EB" strokeWidth="2" />
              <path
                d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-[11px] font-semibold text-slate-700">Você</p>
          <p className="text-[10px] leading-snug text-slate-500">
            Contrata e define as etapas do projeto
          </p>
        </div>

        {/* Platform / escrow */}
        <div className="relative flex flex-col items-center gap-2 bg-brand-navy/[0.03] px-3 py-5 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy shadow-sm">
            <svg
              width="18"
              height="18"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M16 2 L30 7.5 V17 C30 24.5 23.8 30.2 16 32 C8.2 30.2 2 24.5 2 17 V7.5 Z"
                fill="#1E293B"
              />
              <path
                d="M10.5 17L14.5 21L22 12"
                stroke="#10B981"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-[11px] font-semibold text-slate-700">Plataforma</p>
          <p className="text-[10px] leading-snug text-slate-500">
            Custódia ativa até sua aprovação
          </p>
          {/* Arrows — only visible on sm+ 3-col layout */}
          <span className="absolute -left-2.5 top-1/2 hidden -translate-y-1/2 text-lg text-slate-300 sm:inline">
            →
          </span>
          <span className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-lg text-slate-300 sm:inline">
            →
          </span>
        </div>

        {/* Professional */}
        <div className="flex flex-col items-center gap-2 px-3 py-5 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="11"
                width="18"
                height="11"
                rx="2"
                stroke="#10B981"
                strokeWidth="2"
              />
              <path
                d="M8 11V7a4 4 0 0 1 8 0v4"
                stroke="#10B981"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="16.5" r="1.5" fill="#10B981" />
            </svg>
          </div>
          <p className="text-[11px] font-semibold text-slate-700">
            Profissional
          </p>
          <p className="text-[10px] leading-snug text-slate-500">
            Entrega etapa, NF-e e evidências
          </p>
        </div>
      </div>

      {/* Progress stages */}
      <div className="border-t border-slate-100 px-5 py-4">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
          Progresso do projeto
        </p>
        <ol className="space-y-2">
          <StageItem
            status="done"
            label="Etapa 1 — Projeto aprovado"
            value="R$ 1.200"
          />
          <StageItem
            status="active"
            label="Etapa 2 — Execução validada"
            value="R$ 2.300"
          />
          <StageItem
            status="pending"
            label="Etapa 3 — Liberação final"
            value="R$ 1.500"
          />
        </ol>
      </div>

      {/* Footer approval action */}
      <div className="flex items-center justify-between border-t border-slate-100 bg-brand-surface px-5 py-3">
        <span className="text-xs text-slate-500">Total protegido</span>
        <span className="text-sm font-bold text-brand-navy">R$ 5.000</span>
      </div>
    </div>
  );
}

function StageItem({
  status,
  label,
  value,
}: {
  status: "done" | "active" | "pending";
  label: string;
  value: string;
}) {
  const iconMap = {
    done: (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 5L4 7L8 3"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    ),
    active: (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-cobalt">
        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
      </span>
    ),
    pending: (
      <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-200 bg-white" />
    ),
  };

  const textClass = {
    done: "text-slate-500 line-through",
    active: "text-brand-navy font-medium",
    pending: "text-slate-400",
  }[status];

  return (
    <li className="flex items-center gap-3">
      {iconMap[status]}
      <span className={`flex-1 text-xs ${textClass}`}>{label}</span>
      <span
        className={`text-xs font-medium ${status === "done" ? "text-slate-400" : "text-brand-navy"}`}
      >
        {value}
      </span>
    </li>
  );
}
