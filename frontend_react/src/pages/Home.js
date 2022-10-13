import React, { useContext } from "react";

import MyHeader from "../component/MyHeader";
import Feed from "../component/feed";
import MyFooter from "../component/MyFooter";

import { FeedStateContext } from "../App";

const Home = () => {
  const FeedState = useContext(FeedStateContext);

  return (
    <div className="body">
      <MyHeader />
      <Feed />
      <MyFooter />
    </div>
  );
};

export default Home;
