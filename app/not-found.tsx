import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[960px] px-5 py-32 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-dim">
        404 — Not found
      </p>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
        This page doesn’t exist.
      </h1>
      <Link
        href="/"
        className="mt-10 inline-flex h-11 items-center rounded-md bg-heading px-5 text-sm font-medium text-canvas transition-colors duration-150 hover:bg-white"
      >
        Back to home
      </Link>
    </section>
  );
}
