import { useState } from "react";
import { ToggleContext } from "./toggle.context";

export const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn((previousState) => !previousState);
  };

  const contextValue = {
    on,
    toggle,
  };

  return (
    <ToggleContext.Provider value={contextValue}>
      {children}
    </ToggleContext.Provider>
  );
};
