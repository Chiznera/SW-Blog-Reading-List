import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

const Planets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="container text-light bg-dark">
      <div className="row">
        <div className="col-8 offset-2 d-flex flex-row flex-wrap justify-content-around">
          {store.planets.map((planet, index) => (
            <Card
              title={planet.name}
              link={planet.url}
              key={index}
              climate={planet.climate}
              terrain={planet.terrain}
              population={planet.population}
            />
          ))}
          {/* <Card /> */}
        </div>
      </div>
    </div>
  );
};

export { Planets };
