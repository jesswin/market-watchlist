import { useState } from "react";
import WatchListContext from "./WatchList-Context";

// Setting the WatchList Globally
const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState([]);
  const setWatchListHandler = (watchListProp) => {
    setWatchList(watchListProp);
  };

  return (
    // Context Provider
    <WatchListContext.Provider
      value={{
        setWatchList: setWatchListHandler,
        watchList: watchList,
      }}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
