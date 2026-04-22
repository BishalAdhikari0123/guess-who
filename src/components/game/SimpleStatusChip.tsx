type SimpleStatusChipProps = {
  label: string;
  value: string;
  tone?: "neutral" | "good" | "bad";
};

export default function SimpleStatusChip({ label, value, tone = "neutral" }: SimpleStatusChipProps) {
  const toneClass =
    tone === "good"
      ? "bg-white text-black border-white"
      : tone === "bad"
        ? "bg-black text-zinc-300 border-zinc-700"
        : "bg-zinc-900 text-zinc-200 border-zinc-700";

  return (
    <div className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs ${toneClass}`}>
      <span className="font-medium">{label}:</span>
      <span>{value}</span>
    </div>
  );
}
