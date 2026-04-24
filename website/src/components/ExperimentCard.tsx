import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Tag";
import { Experiment } from "@/data/experiments";

const toneCycle: Array<"mint" | "glow" | "berry"> = ["mint", "glow", "berry"];

export default function ExperimentCard({ experiment, index }: { experiment: Experiment; index: number }) {
  const image = experiment.outputs[0];
  const tone = toneCycle[index % toneCycle.length];

  return (
    <Link
      href={`/experiments/${experiment.id}`}
      className="group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-ink-800/80 p-6 shadow-card transition duration-300 hover:-translate-y-2 hover:border-white/25"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Tag label={experiment.category} tone={tone} />
        <Tag label={experiment.level} tone="neutral" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-2xl text-ink-100">
          {experiment.title}
        </h3>
        <p className="text-sm text-ink-100/80">
          {experiment.summary}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between text-sm text-ink-100/70">
        <span>Dataset: {experiment.dataset}</span>
        <span className="text-glow-300">View</span>
      </div>
    </Link>
  );
}
