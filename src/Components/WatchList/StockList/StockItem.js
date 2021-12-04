import React, { useContext, useEffect, useState } from "react";
import WatchListContext from "../../../Store/WatchList-Context";
import ColoredData from "../../UI/ColoredData/ColoredData";
import classes from "./StockItem.Module.css";
import { MdDelete } from "react-icons/md";

const StockItem = (props) => {
  const [showBtn, setShowBtn] = useState(false);
  const [isInWatchList, setIsInWatchList] = useState();

  //Tapping into Context.
  const watchListCtx = useContext(WatchListContext);
  const watchList = watchListCtx.watchList;

  //Structuring the Data from props.

  // Checking if the data is from "searching List" (Input Component), then structure it in different way.
  let NSEorBSEArray =
    props.dataFrom === "searchList" && props.item[0].split(":");

  let stockName =
    props.dataFrom === "searchList" ? NSEorBSEArray[0] : props.item.stockName;
  let stockPrice =
    props.dataFrom === "searchList" ? props.item[1] : props.item.stockPrice;
  let NSEorBSE =
    props.dataFrom === "searchList" ? NSEorBSEArray[2] : props.item.NSEorBSE;
  let lastPrice =
    props.dataFrom === "searchList" ? props.item[2] : props.item.lastPrice;
  let difference =
    props.dataFrom === "searchList"
      ? (stockPrice - lastPrice) / lastPrice
      : props.item.difference;

  // useEffect to check and set the State if the Component is in the WatchList or not.
  useEffect(() => {
    let stockNameInList = watchList.filter(
      (item) => item.stockName === stockName
    );
    stockNameInList.length !== 0
      ? setIsInWatchList(true)
      : setIsInWatchList(false);
  }, [watchList, stockName]);

  //Hover Effect for Add/Delete Button.
  const mouseEnterHandler = () => {
    setShowBtn(true);
  };
  const mouseLeaveHandler = () => {
    setShowBtn(false);
  };

  //Method to add to Watch List
  const addToWatchList = () => {
    props.clearList();
    watchListCtx.setWatchList([
      ...watchList,
      { stockName, stockPrice, lastPrice, difference, NSEorBSE },
    ]);

    // setIsInWatchList(true);
  };

  //Method to Remove from WatchList
  const removeFromWatchList = () => {
    let updatedWatchList = watchList.filter(
      (item) => item.stockName !== stockName
    );
    watchListCtx.setWatchList(updatedWatchList);
    // setIsInWatchList(false);
  };

  return (
    <div
      className={classes.item}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className={classes.alignLeft}>
        <ColoredData difference={difference} data={stockName} />
        <p className={classes.NSEorBSE} >{NSEorBSE}</p>
      </div>
      <div className={classes.alignRight}>
        <ColoredData difference={difference} data={stockPrice} />
        <ColoredData
          difference={difference}
          data={`${difference.toFixed(2)} %`}
        />
      </div>
      {showBtn && (
        <button
          onClick={isInWatchList ? removeFromWatchList : addToWatchList}
          className={classes.btn}
        >
          {isInWatchList ? <MdDelete color="red" /> : "+"}
        </button>
      )}
    </div>
  );
};
export default StockItem;
