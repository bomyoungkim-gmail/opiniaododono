export function BrandLogo({ size = "default" }: { size?: "default" | "lg" }) {
  const iconSize = size === "lg" ? 28 : 22;
  const textClass =
    size === "lg" ? "text-xl font-bold" : "text-base font-semibold";

  return (
    <span
      className={`inline-flex items-center gap-2 text-brand-navy ${textClass}`}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 2 L30 7.5 V17 C30 24.5 23.8 30.2 16 32 C8.2 30.2 2 24.5 2 17 V7.5 Z"
          fill="#0F172A"
        />
        <path
          d="M16 5 L27 9.5 V17 C27 22.8 22.3 27.5 16 29.2 L16 5Z"
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
      <span>Opinião do Dono</span>
    </span>
  );
}
