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
    </>
  );
}

export default App;
