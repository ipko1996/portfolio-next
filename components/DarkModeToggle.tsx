"use client";

import { useChangeDarkMode } from "../hooks/useChangeDarkMode";
import { MouseEventHandler } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DarkModeToggle() {
  const [isDarkMode, toggle] = useChangeDarkMode();

  return (
    <div>
      <div className="flex flex-row items-center space-x-2">
        {/*<div>☀</div>*/}
        <FontAwesomeIcon icon={faSun} />
        <div
          className="tooltip tooltip-bottom flex"
          data-tip={isDarkMode ? "Light" : "Dark"}
        >
          <input
            className="toggle toggle-lg outline-none"
            type="checkbox"
            defaultChecked={isDarkMode as boolean}
            onClick={toggle as MouseEventHandler<HTMLInputElement>}
          />
        </div>
        <FontAwesomeIcon icon={faMoon} />
        {/*<div>☾</div>*/}
      </div>
    </div>
  );
}
