import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Tag from "@/components/Tag";
import CodeBlock from "@/components/CodeBlock";
import { experiments } from "@/data/experiments";

export default function ExperimentDetailPage({ params }: { params: { id: string } }) {
  const experiment = experiments.find((item) => item.id === params.id);

  if (!experiment) {
    notFound();
  }

  return (
    <main className="section">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Link href="/experiments" className="text-sm text-ink-100/70 hover:text-ink-100">
          ← Back to all experiments
        </Link>

        <header className="mt-6 flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            <Tag label={experiment.category} tone="glow" />
            <Tag label={experiment.level} tone="mint" />
            {experiment.algorithms.map((algo) => (
              <Tag key={algo} label={algo} tone="neutral" />
            ))}
          </div>
          <h1 className="font-display text-4xl text-ink-100">{experiment.title}</h1>
          <p className="text-lg text-ink-100/75">{experiment.summary}</p>
        </header>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-ink-100/60">Key highlights</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-100/80">
              {experiment.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-100/60">Metrics</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {experiment.metrics.map((metric) => (
                  <Tag key={metric} label={metric} tone="berry" />
                ))}
              </div>
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-ink-100/60">Dataset</p>
            <p className="mt-3 font-display text-2xl text-ink-100">{experiment.dataset}</p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <Link
                href={experiment.codeUrl}
                className="rounded-full border border-white/20 px-4 py-2 text-center text-ink-100 transition hover:border-white/40"
              >
                View full code
              </Link>
              {experiment.datasetUrl ? (
                <Link
                  href={experiment.datasetUrl}
                  className="rounded-full border border-white/20 px-4 py-2 text-center text-ink-100 transition hover:border-white/40"
                >
                  Download dataset
                </Link>
              ) : null}
              {experiment.reportUrl ? (
                <Link
                  href={experiment.reportUrl}
                  className="rounded-full border border-white/20 px-4 py-2 text-center text-ink-100 transition hover:border-white/40"
                >
                  View report
                </Link>
              ) : null}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Outputs</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {experiment.outputs.map((output) => (
              <div key={output.src} className="glass overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={output.src}
                    alt={output.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 text-sm text-ink-100/70">{output.caption}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Code snapshot</h2>
          <p className="mt-2 text-sm text-ink-100/70">
            Key lines that anchor the experiment workflow.
          </p>
          <div className="mt-4">
            <CodeBlock code={experiment.codeSnippet} />
          </div>
        </section>

        <section className="mt-12">
          <div className="glass rounded-3xl p-6">
            <h2 className="font-display text-2xl">Next steps</h2>
            <p className="mt-2 text-sm text-ink-100/70">
              Want to explore further? Try the full gallery or open the raw script to tweak parameters.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link
                href="/experiments"
                className="rounded-full bg-glow-400 px-5 py-2 text-sm font-semibold text-ink-900"
              >
                Back to gallery
              </Link>
              <Link
                href={experiment.codeUrl}
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-ink-100"
              >
                Open code on GitHub
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
