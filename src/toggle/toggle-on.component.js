import { useToggle } from "./toggle.hook";

export const ToggleOn = ({ children }) => {
  const { on } = useToggle();

  return on ? children : null;
};
