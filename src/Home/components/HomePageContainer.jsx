import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomePageContext } from "../contexts/HomePageContext";

function HomePageContainer() {
  const homePageContext = useContext(HomePageContext);
  return (
    <div>
      <Link to="/semester/2020/sp/schools"> Spring 2020 </Link>
    </div>
  );
}

export default HomePageContainer;
