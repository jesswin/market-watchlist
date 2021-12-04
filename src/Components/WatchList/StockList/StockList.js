import StockItem from "./StockItem";

const StockList = (props) => {
  // Rendering Stock List from here...
  return props.listItems.map((item, index) => {
    return (
      <StockItem
        key={index}
        item={item}
        dataFrom={props.dataFrom}
        clearList={props.clearList}
      />
    );
  });
};
export default StockList;
