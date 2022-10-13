import * as React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// graphql 모듈
import { useQuery, gql } from "@apollo/client";

//pages
import New from "./pages/New";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./App.css";

// gql example
const querydata = gql`
  {
    feed {
      id
      content
    }
  }
`;

//context
export const FeedStateContext = React.createContext();

function App() {
  const [FeedData, setFeedData] = useState();

  // useQuery example
  function FeedView() {
    const { loading, error, data } = useQuery(querydata);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error..:/</p>;

    return data;
  }

  return (
    <FeedStateContext.Provider value={FeedData}>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="new" element={<New />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </FeedStateContext.Provider>
  );
}

export default App;
