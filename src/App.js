import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({name}) => {
  return <h1 style={{ backgroundColor: "green" }}>Left! {name}</h1>;
};

const RightHandComponent = ({message}) => {
  return <h1 style={{ backgroundColor: "red" }}>Right! {message}</h1>;
};

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Ankit"/>
        <RightHandComponent message="Hello"/>
      </SplitScreen>
    </>
  );
}

export default App;
