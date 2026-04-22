import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export default function ModesPage() {
  return (
    <PageShell title="Game Modes" subtitle="Choose your way to play — fast, searchable, and ad-ready">
      <p className="mb-4 text-sm text-zinc-300">
        Browse the available modes for the guess-the-character game. The site includes offline elimination boards, online 6-digit rooms, and themed collections for games, anime, and manhwa.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-white/15 bg-zinc-950 p-5">
          <h2 className="text-lg font-semibold">Offline Elimination Board</h2>
          <p className="mt-1 text-sm text-zinc-300">Great for local play, quick rounds, and lightweight first-load performance.</p>
        </div>
        <div className="rounded-lg border border-white/15 bg-zinc-950 p-5">
          <h2 className="text-lg font-semibold">Online Match (6-digit code)</h2>
          <p className="mt-1 text-sm text-zinc-300">Host or join and play best-of-3 / best-of-5, with room for future sponsorship banners.</p>
        </div>
      </div>
      <div className="mt-5">
        <Link href="/" className="inline-flex rounded-md border border-white/20 bg-white px-3 py-2 text-sm text-black hover:bg-zinc-200">
          Back to Game
        </Link>
      </div>
    </PageShell>
  );
}
