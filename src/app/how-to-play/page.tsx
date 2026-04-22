import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export default function HowToPlayPage() {
  return (
    <PageShell
      title="How to Play"
      subtitle="Quick start guide for all collections and modes"
    >
      <div className="space-y-6">
        <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900/70 p-5 sm:p-6">
          <p className="text-sm sm:text-base leading-6 text-zinc-300 max-w-3xl">
            The goal is simple: eliminate characters until you can identify the hidden one. The game works for quick solo practice and structured online rounds.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/35 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">Step 1</p>
              <p className="mt-1 text-sm font-medium text-zinc-100">Choose collection</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/35 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">Step 2</p>
              <p className="mt-1 text-sm font-medium text-zinc-100">Eliminate cards</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/35 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">Step 3</p>
              <p className="mt-1 text-sm font-medium text-zinc-100">Submit final guess</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-zinc-950/85 p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <h2 className="text-xl font-semibold tracking-tight">Offline flow</h2>
            <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm leading-6 text-zinc-300">
              <li>Open the dashboard and select a collection group.</li>
              <li>Pick your board size (25 / 50 / 75 / all).</li>
              <li>Tap characters to cross them out.</li>
              <li>Use reset when starting a new deduction path.</li>
            </ol>
          </article>

          <article className="rounded-2xl border border-white/10 bg-zinc-950/85 p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <h2 className="text-xl font-semibold tracking-tight">Online flow</h2>
            <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm leading-6 text-zinc-300">
              <li>Toggle online mode and host a 6-digit room (or join one).</li>
              <li>Select your secret character and lock it in.</li>
              <li>Wait for both players to be ready.</li>
              <li>Guess the opponent character to win rounds and the match.</li>
            </ol>
          </article>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 sm:p-6">
          <h3 className="text-lg font-semibold tracking-tight">Pro tips</h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
            <li>• Start smaller (25 or 50) for faster rounds and cleaner deduction.</li>
            <li>• Keep the card count consistent in competitive matches.</li>
            <li>• Use the dashboard button to switch collections between rounds.</li>
          </ul>
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
