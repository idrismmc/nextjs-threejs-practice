import { CSSProperties, ElementType, ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: "div" | "section" | "article" | "main" | "nav";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function Bounded({
  as: Component = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Component
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Component>
  );
}
