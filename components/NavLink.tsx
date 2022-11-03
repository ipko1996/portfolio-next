"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

export default function NavLink({ href, children }: {href: string, children:  React.ReactNode;}) {
  const selectedLayoutSegment = useSelectedLayoutSegments();
  const active = href === `/${selectedLayoutSegment}`;
  //console.log({ href, active, selectedLayoutSegment });

  return (
    <Link
      className={"text-lg " + (active ? " underline font-semibold" : "")}
      href={href}
    >
      {children}
    </Link>
  );
}
