export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      <ol>
      {items.map((item, index) => (
        <li><ItemComponent  key={index} {...{[resourceName]: item}} /></li>
      ))}
      </ol>
    </>
  );
};
