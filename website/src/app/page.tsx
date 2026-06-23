import Link from "next/link";
import Image from "next/image";
import ExperimentCard from "@/components/ExperimentCard";
import Tag from "@/components/Tag";
import { experiments, categories } from "@/data/experiments";

export default function HomePage() {
  const featured = experiments.slice(0, 3);

  return (
    <main>
      <section className="section">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <header className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Tag label="VTU 22 Scheme" tone="glow" />
                <Tag label="BCSL606" tone="mint" />
                <Tag label="VCET" tone="berry" />
              </div>
              <h1 className="font-display text-4xl leading-tight text-ink-100 sm:text-5xl lg:text-6xl">
                Master your <span className="gradient-text">BCSL606 ML Lab Programs</span> with code and datasets.
              </h1>
              <p className="text-lg text-ink-100/80">
                A comprehensive resource designed for 3rd Year, 6th Semester VTU Computer Science Engineering students. Access Python code, downloadable datasets, and full visual outputs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/experiments"
                  className="flex min-h-[44px] items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-900 shadow-glow transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white"
                >
                  View Lab Programs
                </Link>
                <Link
                  href="https://github.com/Rajath2005/ML"
                  className="flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-ink-100 transition hover:border-white/40 focus-visible:ring-2 focus-visible:ring-white"
                >
                  View GitHub repo
                </Link>
              </div>
            </div>
            <div className="hero-card">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/outputs/exp3/figure-1.png"
                  alt="PCA scatter plot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="mt-6 grid gap-4">
                <p className="text-sm uppercase tracking-[0.2em] text-ink-100/60">Featured experiment</p>
                <h2 className="font-display text-2xl">PCA: 4D to 2D Iris Projection</h2>
                <p className="text-sm text-ink-100/75">
                  See how dimensionality reduction reveals separable species clusters.
                </p>
              </div>
            </div>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass rounded-2xl p-6">
              <p className="text-sm uppercase text-ink-100/60">Datasets</p>
              <p className="mt-2 font-display text-3xl">9+</p>
              <p className="text-sm text-ink-100/70">Real and synthetic datasets</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-sm uppercase text-ink-100/60">Algorithms</p>
              <p className="mt-2 font-display text-3xl">12</p>
              <p className="text-sm text-ink-100/70">From Find-S to K-means</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-sm uppercase text-ink-100/60">Outputs</p>
              <p className="mt-2 font-display text-3xl">30+</p>
              <p className="text-sm text-ink-100/70">Charts, plots, and rule exports</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase text-ink-100/60">Categories</p>
              <h2 className="mt-2 font-display text-3xl">Core ML themes</h2>
            </div>
            <Link
              href="/experiments"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-ink-100 transition hover:border-white/40"
            >
              View all experiments
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div key={category} className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-100/60">Track {index + 1}</p>
                <p className="mt-3 text-lg text-ink-100">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase text-ink-100/60">Featured experiments</p>
              <h2 className="mt-2 font-display text-3xl">Visual deep dives</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featured.map((experiment, index) => (
              <ExperimentCard key={experiment.id} experiment={experiment} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase text-ink-100/60">Other Resources</p>
              <h2 className="mt-2 font-display text-3xl">More VTU 22 Scheme Lab Programs</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* React */}
            <div className="glass flex flex-col justify-between rounded-2xl p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink-100/60">BCSL657B</p>
                <h3 className="mt-2 font-display text-xl text-ink-100">React Lab</h3>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="https://reactlabexp.netlify.app/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-center text-sm text-ink-100 transition hover:border-white/40">View website</Link>
                <Link href="https://github.com/Rajath2005/React-Lab" target="_blank" rel="noopener noreferrer" className="text-center text-sm text-ink-100/70 hover:text-ink-100">GitHub repo</Link>
              </div>
            </div>
            {/* Web Tech */}
            <div className="glass flex flex-col justify-between rounded-2xl p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink-100/60">BCSL504</p>
                <h3 className="mt-2 font-display text-xl text-ink-100">Web Technology Lab</h3>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="https://github.com/Rajath2005/web-lab" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-center text-sm text-ink-100 transition hover:border-white/40">GitHub repo</Link>
              </div>
            </div>
            {/* LaTex */}
            <div className="glass flex flex-col justify-between rounded-2xl p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink-100/60">BCSL456D</p>
                <h3 className="mt-2 font-display text-xl text-ink-100">Technical Writing (LaTeX)</h3>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="https://latex-lab-manuals.vercel.app/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-center text-sm text-ink-100 transition hover:border-white/40">View website</Link>
                <Link href="https://github.com/Rajath2005/latex-lab-manuals" target="_blank" rel="noopener noreferrer" className="text-center text-sm text-ink-100/70 hover:text-ink-100">GitHub repo</Link>
              </div>
            </div>
            {/* ADA */}
            <div className="glass flex flex-col justify-between rounded-2xl p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink-100/60">ADA Lab</p>
                <h3 className="mt-2 font-display text-xl text-ink-100">Analysis & Design of Algorithms</h3>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="https://github.com/Rajath2005/Analysis-and-Design-of-Algorithms" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-center text-sm text-ink-100 transition hover:border-white/40">GitHub repo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass flex flex-col gap-6 rounded-3xl p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase text-ink-100/60">Ready to explore?</p>
              <h2 className="mt-3 font-display text-3xl">Start with the full experiment gallery.</h2>
              <p className="mt-3 text-sm text-ink-100/70">
                Browse by category, follow the learning path, or dive into code and results.
              </p>
            </div>
              <Link
              href="/experiments"
              className="flex min-h-[44px] items-center justify-center rounded-full bg-accent-2 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white"
            >
              Go to programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
