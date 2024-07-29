import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./SplitScreen";
import { RegularList } from "./RegularList";
import { people, products } from "./App.const";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallProductListItem } from "./products/SmallProductListItem";
import { NumberedList } from "./NumberedList";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { Modal } from "./Modal";
import { Tabs } from "./tabs/Tabs";
import { Tab } from "./tabs/Tab";
import { Toggle } from "./toggle/toggle.component";
import { ToggleOn } from "./toggle/toggle-on.component";
import { ToggleOff } from "./toggle/toggle-off.component";
import { ToggleButton } from "./toggle/toggle-button.component";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>Left! {name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>Right! {message}</h1>;
};

function App() {
  return (
    <>
      <SplitScreen
        leftWeight={1}
        rightWeight={3}
      >
        <LeftHandComponent name="Ankit" />
        <RightHandComponent message="Hello" />
      </SplitScreen>

      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      ></RegularList>

      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      ></RegularList>

      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      ></RegularList>

      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      ></NumberedList>

      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      ></NumberedList>

      <Modal>
        <LargeProductListItem product={products[0]}></LargeProductListItem>
      </Modal>

      <Tabs>
        <Tab label="Tab 1">
          <h2>Tab 1</h2>
        </Tab>
        <Tab label="Tab 2">
          <h2>Tab 2</h2>
        </Tab>
        <Tab label="Tab 3">
          <h2>Tab 3</h2>
        </Tab>
        <Tab label="Tab 4">
          <h2>Tab 4</h2>
        </Tab>
      </Tabs>

      <Toggle>
        <ToggleOn>The button is ON</ToggleOn>
        <ToggleOff>The button is OFF</ToggleOff>
        <ToggleButton />
      </Toggle>
    </>
  );
}

export default App;
