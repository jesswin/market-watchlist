import { useContext } from "react";
import Input from "../Components/WatchList/Input/Input";
import StockList from "../Components/WatchList/StockList/StockList";
import WatchListContext from "../Store/WatchList-Context";

const WatchList = () => {
  const watchListCtx = useContext(WatchListContext);
  const watchList = watchListCtx.watchList;
  return (
    <>
      {/* Input Element with Seach and Dropdown */}
      <Input />
      {/* WatchList Text */}
      {watchList.length > 0 && (
        <p
          style={{
            maxWidth: "55rem",
            margin: "auto",
            padding: "1.2rem",
            textAlign: "left",
          }}
        >
          Watch-list of Jesswin
        </p>
      )}

      {/* WatchList shown if available */}
      <StockList dataFrom="watchList" listItems={watchList} />
    </>
  );
};
export default WatchList;
