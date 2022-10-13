import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const MyLogo = () => {
  return (
    <div>
      <div className="Header">
        <Link to={"/"}>
          <div className="headtext">InReactgram</div>
        </Link>
      </div>
      <div className="hiddenHeader"></div>
    </div>
  );
};

export default MyLogo;
