import { ReactNode } from "react";

type PageShellProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-4 shadow-[0_20px_80px_rgba(0,0,0,0.3)] sm:px-5 sm:py-5">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-zinc-400">MLBB- Guess Who</p>
            <h1 className="mt-3 text-xl sm:text-3xl font-semibold tracking-tight leading-tight">{title}</h1>
            {subtitle ? <p className="mt-2 max-w-3xl text-xs sm:text-sm leading-5 sm:leading-6 text-zinc-300">{subtitle}</p> : null}
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</section>
    </main>
  );
}
