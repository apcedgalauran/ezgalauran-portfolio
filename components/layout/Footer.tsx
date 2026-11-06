import { site } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[960px] flex-col gap-2 px-5 py-10 font-mono text-xs text-dim sm:flex-row sm:justify-between sm:px-8">
        <p>{site.copyright}</p>
        <p>{site.builtWith}</p>
      </div>
    </footer>
  );
}
