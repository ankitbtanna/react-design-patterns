import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: "green" }}>Left!</h1>;
};

const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: "red" }}>Right!</h1>;
};

function App() {
  return (
    <>
      <SplitScreen>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen>
    </>
  );
}

export default App;
