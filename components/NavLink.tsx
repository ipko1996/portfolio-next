"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

export default function NavLink({
  href,
  children,
  fn,
}: {
  href: string;
  children: React.ReactNode;
  fn?: () => void | undefined;
}) {
  const selectedLayoutSegment = useSelectedLayoutSegments();
  const active = href === `/${selectedLayoutSegment}`;
  //console.log({ href, active, selectedLayoutSegment });

  return (
    <Link
      onClick={fn}
      className={
        "text-lg font-semibold md:px-6 md:py-2 px-12 py-6 rounded-3xl " +
        (active
          ? `dark:bg-indigo-800 dark:hover:bg-indigo-800
        bg-stone-400 hover:bg-stone-400
        `
          : `dark:hover:bg-indigo-900
        hover:bg-stone-500`)
      }
      href={href}
    >
      {children}
    </Link>
  );
}
