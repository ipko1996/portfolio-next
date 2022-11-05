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
      className={"text-lg p-2 hover:underline" + (active ? " underline font-semibold" : "")}
      href={href}
    >
      {children}
    </Link>
  );
}
