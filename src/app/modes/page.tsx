import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export default function ModesPage() {
  return (
    <PageShell title="Game Modes" subtitle="Choose your way to play">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold">Offline Elimination Board</h2>
          <p className="mt-1 text-sm text-slate-600">Great for local play and quick rounds.</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold">Online Match (6-digit code)</h2>
          <p className="mt-1 text-sm text-slate-600">Host or join and play best-of-3 / best-of-5.</p>
        </div>
      </div>
      <div className="mt-5">
        <Link href="/" className="inline-flex rounded-md bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800">
          Back to Game
        </Link>
      </div>
    </PageShell>
  );
}
