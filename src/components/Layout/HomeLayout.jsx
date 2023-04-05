import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div style={{ textAlign: "center" }}>
        <p>{navigation.state === "loading" && "loading product....... "}</p>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayout;
