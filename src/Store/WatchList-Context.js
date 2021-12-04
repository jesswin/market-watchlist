import React from "react";

// Context Design for State
const WatchListContext = React.createContext({
  setWatchList: () => {},
  watchList: [],
});

export default WatchListContext;
