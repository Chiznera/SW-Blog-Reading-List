import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Planets } from "./planets";
import { Vehicles } from "./vehicles";
import { People } from "./people";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="my-5">
        <h1 className="offset-2">People</h1>
        <People />
      </div>
      <div className="my-5">
        <h1 className="offset-2">Planets</h1>
        <Planets />
      </div>
      <div className="my-5">
        <h1 className="offset-2">Vehicles</h1>
        <Vehicles />
      </div>
    </>
  );
};
