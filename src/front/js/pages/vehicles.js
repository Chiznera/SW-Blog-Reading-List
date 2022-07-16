import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

const Vehicles = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVehicles();
  }, []);

  return (
    <div className="container text-light bg-dark">
      <div className="row">
        <div className="hiddenScroll d-flex flex-row">
          {store.vehicles.map((vehicle, index) => (
            <div>
              <Card
                title={vehicle.name}
                link={"/vehicles/" + index}
                key={index}
                text={
                  <>
                    Manufacturer:{" "}
                    {vehicle.manufacturer
                      ? vehicle.manufacturer
                      : "Placeholder Text"}
                    <br />
                    Cost: {vehicle.cost ? vehicle.cost : "Placeholder Text"}
                  </>
                }
                func={actions.addFavorite}
                item={vehicle}
              />
            </div>
          ))}
          {/* <Card /> */}
        </div>
      </div>
    </div>
  );
};

export { Vehicles };
