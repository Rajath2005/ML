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
      className="group flex h-full flex-col gap-4 rounded-[2rem] border border-white/10 bg-ink-800/80 p-6 shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] hover:border-white/25 focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`View details for ${experiment.title}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border border-white/10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Tag label={experiment.category} tone={tone} />
        <Tag label={experiment.level} tone="neutral" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-2xl text-ink-100 transition-colors group-hover:text-accent">
          {experiment.title}
        </h3>
        <p className="text-sm text-ink-100/80">
          {experiment.summary}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between gap-4 text-sm text-ink-100/70">
        <span className="truncate">Data: {experiment.dataset}</span>
        <span className="flex min-h-[44px] min-w-[120px] items-center justify-center rounded-xl bg-white/5 px-4 font-medium text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-pink-600 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
          View Program
        </span>
      </div>
    </Link>
  );
}
