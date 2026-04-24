import ExperimentCard from "@/components/ExperimentCard";
import Tag from "@/components/Tag";
import { experiments, categories } from "@/data/experiments";

export default function ExperimentsPage() {
  return (
    <main className="section">
      <div className="mx-auto w-full max-w-6xl px-6">
        <header className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            <Tag label="All experiments" tone="glow" />
            <Tag label="Two views" tone="mint" />
            <Tag label="Code + Outputs" tone="berry" />
          </div>
          <h1 className="font-display text-4xl text-ink-100">Experiments Gallery</h1>
          <p className="text-lg text-ink-100/75">
            Explore the collection by category or follow the sequential learning path from EXP1 to EXP10.
          </p>
        </header>

        <section className="mt-14">
          <h2 className="font-display text-2xl">Category view</h2>
          <div className="mt-6 grid gap-6">
            {categories.map((category) => {
              const categoryItems = experiments.filter((experiment) => experiment.category === category);
              if (categoryItems.length === 0) return null;

              return (
                <div key={category} className="glass rounded-3xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-ink-100/60">Category</p>
                      <h3 className="mt-2 font-display text-2xl">{category}</h3>
                    </div>
                    <span className="text-sm text-ink-100/70">{categoryItems.length} experiment(s)</span>
                  </div>
                  <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    {categoryItems.map((experiment, index) => (
                      <ExperimentCard key={experiment.id} experiment={experiment} index={index} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl">Sequential view</h2>
          <p className="mt-2 text-sm text-ink-100/70">
            Follow the progression from introductory analysis to advanced clustering.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {experiments.map((experiment, index) => (
              <div key={experiment.id} className="glass flex items-center gap-5 rounded-2xl p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-700 text-lg font-semibold text-glow-300">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm uppercase text-ink-100/60">EXP{index + 1}</p>
                  <h3 className="font-display text-xl text-ink-100">{experiment.title}</h3>
                  <p className="text-sm text-ink-100/70">{experiment.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
