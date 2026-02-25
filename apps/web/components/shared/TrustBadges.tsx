import { Camera, DollarSign, ShieldCheck, Clock3 } from "lucide-react";

const badges = [
  { icon: DollarSign, label: "escrow por etapas" },
  { icon: Camera, label: "evidências de execução" },
  { icon: ShieldCheck, label: "trilha auditável" },
  { icon: Clock3, label: "governança de prazo" },
];

export function TrustBadges() {
  return (
    <ul className="mt-6 flex flex-wrap gap-3" aria-label="Pilares de confiança">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <li
            key={badge.label}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm"
          >
            <Icon className="h-4 w-4 text-brand-cobalt" aria-hidden="true" />
            <span>{badge.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
