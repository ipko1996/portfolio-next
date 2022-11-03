import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

export const useChangeDarkMode = () => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  useEffect(
    () => {
      const className = "dark";
      const element = window.document.body;
      if (isDarkMode) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [isDarkMode] // Only re-call effect when value changes
  );
  return [isDarkMode, toggle, enable, disable];
};
