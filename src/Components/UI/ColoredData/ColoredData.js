import classes from "./ColoredData.Module.css";

// To check the difference of Stock Price and change the Color.
const ColoredData = (props) => {
  let colorClass;
  if (props.difference > 0) {
    colorClass = "stockPriceGreen";
  } else if (props.difference < 0) {
    colorClass = "stockPriceRed";
  } else {
    colorClass = "stockPriceRegular";
  }

  return <p className={classes[colorClass]}>{props.data}</p>;
};
export default ColoredData;
