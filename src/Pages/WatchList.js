import { useContext } from "react";
import Input from "../Components/WatchList/Input/Input";
import StockList from "../Components/WatchList/StockList/StockList";
import WatchListContext from "../Store/WatchList-Context";

const WatchList = () => {
  const watchListCtx = useContext(WatchListContext);
  const watchList = watchListCtx.watchList;
  return (
    <>
      <p
        style={{
          maxWidth: "55rem",
          fontSize: "1.2rem",
          margin: "auto",
          padding: "1.2rem",
        }}
      >
        Search in the box below and start adding Stocks to your watch-list
      </p>
      {/* Input Element with Seach and Dropdown */}
      <Input />
      {/* WatchList Text */}
      {watchList.length > 0 && (
        <p
          style={{
            maxWidth: "55rem",
            fontSize: "1.2rem",
            margin: "auto",
            padding: "1.2rem",
            textAlign: "left",
          }}
        >
          Watch List
        </p>
      )}

      {/* WatchList shown if available */}
      <StockList dataFrom="watchList" listItems={watchList} />
    </>
  );
};
export default WatchList;
