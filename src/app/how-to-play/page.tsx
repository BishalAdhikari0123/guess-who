import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export default function HowToPlayPage() {
  return (
    <PageShell
      title="How to Play"
      subtitle="A quick guide for new players"
    >
      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
        <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
          <li>Pick a game and board size.</li>
          <li>Tap cards to eliminate characters.</li>
          <li>In online mode, host/join with a 6-digit code.</li>
          <li>Lock your secret character, then guess opponent’s character.</li>
          <li>Use best-of-3 / best-of-5 to finish a match.</li>
        </ol>
        <Link href="/" className="inline-flex rounded-md bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800">
          Back to Game
        </Link>
      </div>
    </PageShell>
  );
}
