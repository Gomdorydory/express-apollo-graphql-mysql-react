import React from "react";
import { Link } from "react-router-dom";

import "./myfooter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Buttons from "./buttons";

const House = <FontAwesomeIcon icon={faHouse} />;
const MagnifyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />;
const Film = <FontAwesomeIcon icon={faFilm} />;
const Bag = <FontAwesomeIcon icon={faBagShopping} />;

function MyFooter() {
  return (
    <div>
      <div className="hiddenHeader"></div>
      <div className="myfooter">
        <Link to={"/"}>
          <Buttons text={House} />
        </Link>
        <Buttons text={MagnifyingGlass} />
        <Buttons text={Film} />
        <Buttons text={Bag} />
        <Link to={"/signin"}>
          <div className="FooterProfilePicture"></div>
        </Link>
      </div>
    </div>
  );
}

export default MyFooter;
