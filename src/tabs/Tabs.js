import React, { useState } from "react";

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const data = {
    tab1: {
      label: "Tab 1",
      content: "Content 1",
    },
    tab2: {
      name: "Tab 2",
      favAnimal: "Content 2",
    },
    tab3: {
      name: "Tab 3",
      favBird: "Content 3",
    },
    tab4: {
      name: "Tab 4",
      favFood: "Content 4",
    },
  };

  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                backgroundColor: index === activeTab ? "lightblue" : "white",
              }}
            >
              {child.props.label}
            </button>
          );
        })}
      </div>
      <div>
        {React.Children.map(children, (child, index) => {
          return (
            <div
              style={{
                display: index === activeTab ? "block" : "none",
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};
