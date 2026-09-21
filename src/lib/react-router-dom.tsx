"use client";
import React from 'react';
import NextLink from 'next/link';
import { useRouter, usePathname, useParams as useNextParams, useSearchParams as useNextSearchParams } from 'next/navigation';

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
  const searchParams = useNextSearchParams();
  return {
    pathname,
    search: searchParams?.toString() ? `?${searchParams.toString()}` : '',
    hash: typeof window !== 'undefined' ? window.location.hash : '',
    state: null,
  };
}

export function useParams(): Record<string, string> {
  const params = useNextParams();
  const stringParams: Record<string, string> = {};
  if (params) {
    for (const key in params) {
      const val = params[key];
      stringParams[key] = Array.isArray(val) ? val[0] : (val || "");
    }
  }
  return stringParams;
}

export function useSearchParams() {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const setSearchParams = (params: any) => {
    const newParams = new URLSearchParams(params);
    router.push(`${pathname}?${newParams.toString()}`);
  };
  return [searchParams, setSearchParams] as any;
}

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
