import React, { useContext, useEffect} from "react";
import { HomePageContext } from "../contexts/HomePageContext";

function HomePageContainer() {
  const homePageContext = useContext(HomePageContext);
  return (
    <div >
    Home page container
    </div>
  );
}

export default HomePageContainer;
