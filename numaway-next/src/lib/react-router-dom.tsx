"use client";
import React from 'react';
import NextLink from 'next/link';
import { useRouter, usePathname, useParams as useNextParams, useSearchParams } from 'next/navigation';

export const Link = React.forwardRef<HTMLAnchorElement, any>(({ to, replace, ...props }, ref) => {
  return <NextLink href={to || ""} replace={replace} ref={ref} {...props} />;
});
Link.displayName = "Link";

export const NavLink = Link;

export function useNavigate() {
  const router = useRouter();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === 'number') {
      if (to === -1) router.back();
      return;
    }
    if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  };
}

export function useLocation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return {
    pathname,
    search: searchParams?.toString() ? `?${searchParams.toString()}` : '',
    hash: typeof window !== 'undefined' ? window.location.hash : '',
    state: null,
  };
}

export function useParams() {
  return useNextParams();
}

export { useSearchParams };

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useRouter();
  React.useEffect(() => {
    if (replace) router.replace(to);
    else router.push(to);
  }, [to, replace, router]);
  return null;
}

export function Outlet() {
  return null;
}
