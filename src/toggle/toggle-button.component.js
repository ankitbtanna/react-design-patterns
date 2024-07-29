import { useToggle } from "./toggle.hook";

export const ToggleButton = () => {
  const { on, toggle } = useToggle();
  return <button onClick={toggle}>{on ? "on" : "off"}</button>;
};
