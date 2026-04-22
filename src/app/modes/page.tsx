import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export default function ModesPage() {
  return (
    <PageShell title="Game Modes" subtitle="Pick a play style and jump in quickly">
      <div className="space-y-6">
        <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900/70 p-5 sm:p-6">
          <p className="text-sm sm:text-base leading-6 text-zinc-300 max-w-3xl">
            The game supports fast solo rounds, online best-of matches, and multi-universe character sets (games, anime, and manhwa).
            Choose a mode based on how long you want to play and whether you are going head-to-head online.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/35 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">Speed</p>
              <p className="mt-1 text-sm font-medium text-zinc-100">Quick rounds</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/35 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">Online</p>
              <p className="mt-1 text-sm font-medium text-zinc-100">6-digit code rooms</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/35 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">Collections</p>
              <p className="mt-1 text-sm font-medium text-zinc-100">Games / Anime / Manhwa</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-zinc-950/85 p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-300">
              ⚡ Core mode
            </div>
            <h2 className="mt-3 text-xl font-semibold tracking-tight">Offline Elimination Board</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Best for quick local sessions and practice runs. Tap characters to eliminate possibilities and narrow your answer.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Works instantly with no connection setup</li>
              <li>• Great for mobile and one-handed play</li>
              <li>• Fast loading and minimal friction</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-zinc-950/85 p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-300">
              🌐 Competitive
            </div>
            <h2 className="mt-3 text-xl font-semibold tracking-tight">Online Match (6-digit code)</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Host or join private rooms and play best-of-3 or best-of-5 matches with secret character locking.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Private room code matchmaking</li>
              <li>• Built-in round and match score tracking</li>
              <li>• Great for friends and community events</li>
            </ul>
          </article>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 sm:p-6">
          <h3 className="text-lg font-semibold tracking-tight">Suggested setup</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-zinc-300">Start with 25 or 50 characters for faster rounds.</div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-zinc-300">Use bo3 for casual sessions, bo5 for longer matches.</div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-zinc-300">Switch collection themes from the top controls anytime.</div>
          </div>
        </section>

        <div className="pt-1">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
            Back to Game
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
