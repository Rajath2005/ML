"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
};

export default function CodeBlock({ code }: CodeBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080811] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
      {/* Sleek Toolbar */}
      <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
          <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
          <span className="ml-3 text-xs font-semibold tracking-widest text-ink-100/40 uppercase">Python</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-medium text-ink-100/60 transition hover:text-white"
          >
            {isExpanded ? "Collapse View" : "Expand Full Code"}
          </button>
          <button
            onClick={handleCopy}
            className="flex h-7 items-center justify-center rounded-lg bg-white/10 px-3 text-xs font-medium text-white transition hover:bg-white/20 active:scale-95"
          >
            {isCopied ? "✓ Copied" : "Copy Code"}
          </button>
        </div>
      </div>

      {/* Code Viewer */}
      <div className={`${isExpanded ? "" : "max-h-[600px]"} overflow-y-auto overflow-x-auto custom-scrollbar`}>
        <SyntaxHighlighter
          language="python"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            background: "transparent",
            fontSize: "14px",
            lineHeight: "1.6",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
