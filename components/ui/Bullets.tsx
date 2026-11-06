/** Hairline-dash bulleted list shared by cards and sections. */
export function Bullets({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul
      className={`space-y-2 text-[0.9375rem] leading-relaxed text-body ${className}`}
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
