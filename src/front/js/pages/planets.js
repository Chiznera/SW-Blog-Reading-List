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
        <div className="hiddenScroll d-flex flex-row">
          {store.planets.map((planet, index) => (
            <div>
              <Card
                title={planet.name}
                link={planet.url}
                key={index}
                text={
                  <>
                    Climate:{" "}
                    {planet.climate ? planet.climate : "Placeholder Text"}
                    <br />
                    Terrain:{" "}
                    {planet.terrain ? planet.terrain : "Placeholder Text"}
                    <br />
                    Population:{" "}
                    {planet.population ? planet.population : "Placeholder Text"}
                  </>
                }
              />
            </div>
          ))}
          {/* <Card /> */}
        </div>
      </div>
    </div>
  );
};

export { Planets };
