"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "className" | "href"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  to: string | { pathname: string };
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    const pathname = usePathname();
    const targetPath = typeof to === "string" ? to : to.pathname;
    const isActive = pathname === targetPath || pathname?.startsWith(targetPath + "/");

    return (
      <Link
        ref={ref}
        href={to as any}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };

