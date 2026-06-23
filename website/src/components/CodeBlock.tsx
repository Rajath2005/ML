"use client";

import { useState } from "react";

type CodeBlockProps = {
  code: string;
};

export default function CodeBlock({ code }: CodeBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-end">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex min-h-[44px] items-center justify-center rounded-lg bg-white/10 px-4 text-sm font-medium text-ink-100 transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-accent"
        >
          {isExpanded ? "Collapse View" : "Expand Full Code"}
        </button>
      </div>
      <pre
        className={`code-block ${
          isExpanded ? "" : "max-h-[500px]"
        } overflow-y-auto`}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
