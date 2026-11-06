import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-150";

const variants: Record<Variant, string> = {
  primary:
    "h-11 px-5 bg-heading text-canvas hover:bg-white",
  secondary:
    "h-11 px-5 border border-line text-heading hover:border-line-strong hover:bg-raised",
  icon:
    "h-11 w-11 border border-line text-heading hover:border-line-strong hover:bg-raised",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  external?: boolean;
};

/** Link styled as a button (every action on this site is navigation). */
export function ButtonLink({
  variant = "primary",
  external = false,
  className = "",
  children,
  ...props
}: Props) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      className={`${base} ${variants[variant]} ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
}
