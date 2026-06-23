import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-ink-900/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex min-h-[44px] items-center font-display text-xl text-ink-100 focus-visible:ring-2 focus-visible:ring-white">
          VTU ML Lab
        </Link>
        <div className="flex items-center gap-5 text-sm text-ink-100/80">
          <Link href="/experiments" className="flex min-h-[44px] items-center justify-center transition hover:text-ink-100 focus-visible:ring-2 focus-visible:ring-white">
            Programs
          </Link>
          <Link href="https://github.com/Rajath2005/ML" className="flex min-h-[44px] items-center justify-center transition hover:text-ink-100 focus-visible:ring-2 focus-visible:ring-white">
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
}
