import { useRef, useState } from "react";
import data from "../../../Store/data.json";
import StockList from "../StockList/StockList";
import classes from "./Input.Module.css";
const Input = () => {
  const [inputText, setInputText] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const inputRef = useRef();

  //Input Change handler to change the results on every key stoke and set the state according to that.
  const inputChangeHandler = () => {
    let text = inputRef.current.value;
    text = text.toUpperCase();
    if (text !== "") {
      setInputText(text);
      setSearchedData(data.filter((item) => item[0].startsWith(text)));
    } else {
      setInputText("");
      setSearchedData([]);
    }
  };

  //Clearing List after adding to WatchList, to show User.
  const clearList = () => {
    setInputText("");
    setSearchedData([]);
  };

  return (
    <>
      <input
        ref={inputRef}
        value={inputText}
        placeholder="Search Stocks..."
        onChange={inputChangeHandler}
        className={classes.inputClass}
      />
      {/* rendering dropdown conditionally, if textBox has something in it or not. */}
      {searchedData === [] ? (
        <></>
      ) : (
        <StockList
          clearList={clearList}
          dataFrom="searchList"
          listItems={searchedData}
        />
      )}
    </>
  );
};

export default Input;
