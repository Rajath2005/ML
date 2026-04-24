import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="mx-auto w-full max-w-3xl px-6">
        <h1 className="font-display text-4xl text-ink-100">Experiment not found</h1>
        <p className="mt-4 text-ink-100/70">
          The experiment you are looking for does not exist yet.
        </p>
        <Link
          href="/experiments"
          className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-2 text-sm text-ink-100"
        >
          Back to experiments
        </Link>
      </div>
    </main>
  );
}
