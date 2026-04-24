type TagProps = {
  label: string;
  tone?: "mint" | "glow" | "berry" | "neutral";
};

const toneMap: Record<NonNullable<TagProps["tone"]>, string> = {
  mint: "border-mint-400/40 text-mint-300 bg-mint-400/10",
  glow: "border-glow-400/40 text-glow-300 bg-glow-400/10",
  berry: "border-berry-400/40 text-berry-300 bg-berry-400/10",
  neutral: "border-white/20 text-ink-100 bg-white/5"
};

export default function Tag({ label, tone = "neutral" }: TagProps) {
  return (
    <span className={`tag border ${toneMap[tone]}`}>
      {label}
    </span>
  );
}
