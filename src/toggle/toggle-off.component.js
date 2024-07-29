import { useToggle } from "./toggle.hook";

export const ToggleOff = ({ children }) => {
  const { on } = useToggle();

  return on ? null : children;
};
