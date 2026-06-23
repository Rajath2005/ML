import ExperimentCard from "@/components/ExperimentCard";
import Tag from "@/components/Tag";
import { experiments } from "@/data/experiments";

export default function ExperimentsPage() {
  return (
    <main className="section animate-fade-in-up">
      <div className="mx-auto w-full max-w-6xl px-6">
        <header className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            <Tag label="VTU 22 Scheme" tone="glow" />
            <Tag label="BCSL606" tone="mint" />
            <Tag label="Sequential List" tone="berry" />
          </div>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Lab Programs Timeline</span>
          </h1>
          <p className="text-lg text-ink-100/75">
            Follow the complete chronological progression of all 10 ML Lab Programs, from basic Exploratory Data Analysis to advanced K-means Clustering.
          </p>
        </header>

        <section className="mt-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {experiments.map((experiment, index) => (
              <ExperimentCard key={experiment.id} experiment={experiment} index={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
