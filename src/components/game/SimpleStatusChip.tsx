type SimpleStatusChipProps = {
  label: string;
  value: string;
  tone?: "neutral" | "good" | "bad";
};

export default function SimpleStatusChip({ label, value, tone = "neutral" }: SimpleStatusChipProps) {
  const toneClass =
    tone === "good"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : tone === "bad"
        ? "bg-rose-50 text-rose-700 border-rose-200"
        : "bg-slate-50 text-slate-700 border-slate-200";

  return (
    <div className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs ${toneClass}`}>
      <span className="font-medium">{label}:</span>
      <span>{value}</span>
    </div>
  );
}
