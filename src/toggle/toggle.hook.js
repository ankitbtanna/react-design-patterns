import { useContext } from "react";
import { ToggleContext } from "./toggle.context";

export const useToggle = () => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error(
      "Toggle compound components must be rendered within the Toggle provider"
    );
  }

  return context;
};
