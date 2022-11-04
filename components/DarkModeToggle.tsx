"use client";

import {useChangeDarkMode} from "../hooks/useChangeDarkMode";
import {MouseEventHandler} from "react";

export default function DarkModeToggle() {
  const [isDarkMode, toggle] = useChangeDarkMode();

  return (
    <div>
      <div className="flex flex-row items-center space-x-2">
        <div>☀</div>
        <input
          className="toggle toggle-lg outline-none"
          type="checkbox"
          defaultChecked={isDarkMode as boolean}
          onClick={toggle as  MouseEventHandler<HTMLInputElement>}
        />
        <div>☾</div>
      </div>
    </div>
  );
}
