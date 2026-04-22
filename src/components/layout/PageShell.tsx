import { ReactNode } from "react";

type PageShellProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/15 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? <p className="mt-1 text-sm text-zinc-300">{subtitle}</p> : null}
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</section>
    </main>
  );
}
