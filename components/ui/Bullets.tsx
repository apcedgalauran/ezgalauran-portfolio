/** Hairline-dash bulleted list shared by cards and sections. */
export function Bullets({
  items,
  tone = "default",
  className = "",
}: {
  items: string[];
  /** "strong" lifts the text toward the heading colour (card highlights). */
  tone?: "default" | "strong";
  className?: string;
}) {
  const color = tone === "strong" ? "text-heading/85" : "text-body";
  return (
    <ul
      className={`space-y-2 text-[0.9375rem] leading-relaxed ${color} ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.75em] h-px w-2.5 shrink-0 bg-line-strong"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
