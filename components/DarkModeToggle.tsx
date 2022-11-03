"use client";

import { useChangeDarkMode } from "../hooks/useChangeDarkMode";
import { ChangeEventHandler } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, toggle, enable, disable] = useChangeDarkMode();

  return (
    <div>
      <div className="flex flex-row items-center space-x-2">
        <div>☀</div>

        <input
          className="toggle toggle-lg"
          type="checkbox"
          checked={isDarkMode as boolean}
          onChange={toggle as ChangeEventHandler<HTMLInputElement>}
        />
        <div>☾</div>
      </div>
    </div>
  );
}
