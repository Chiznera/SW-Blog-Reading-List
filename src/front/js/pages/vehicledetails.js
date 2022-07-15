import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailComponent } from "../component/detailcomponent";

const VehicleDetails = () => {
  const { store, actions } = useContext(Context);
  const { catagory, id } = useParams();

  useEffect(() => {
    actions.getVehicles();
  }, []);

  return (
    <div className="container text-light bg-dark">
      <div className="container text-light bg-dark d-flex">
        <img
          src="https://placekitten.com/200/300"
          className="img-thumbnail"
          alt="..."
        />
        <div className="card-header">
          <div className="card-title">
            {store.vehicles[id]?.name.toString()}
          </div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
            sagittis leo, nec rhoncus nulla. Etiam quis ligula sit amet libero
            aliquam bibendum. Sed ut orci aliquam, blandit ante a, egestas eros.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Cras maximus tortor eu arcu molestie
            pellentesque. In cursus arcu odio, eu pellentesque augue semper ut.
            Nulla condimentum nisi sapien, quis scelerisque ante dapibus nec.
            Fusce sed sagittis neque. Aenean cursus commodo leo, viverra
            malesuada diam pharetra eu. In vehicula elit sed ex molestie
            volutpat.
          </div>
        </div>
      </div>
      <div className="d-flex">
        <DetailComponent title="model" text={`${store.vehicles[id]?.model}`} />
        <DetailComponent
          title="Vehicle Class"
          text={`${store.vehicles[id]?.vehicle_class}`}
        />
        <DetailComponent
          title="Manufacturer"
          text={`${store.vehicles[id]?.manufacturer}`}
        />
        <DetailComponent
          title="Length"
          text={`${store.vehicles[id]?.length} meters`}
        />
        <DetailComponent
          title="Cost in Credits"
          text={`${store.vehicles[id]?.cost_in_credits} Galactic Credits`}
        />
        <DetailComponent title="Crew" text={`${store.vehicles[id]?.crew}`} />
        <DetailComponent
          title="Passengers"
          text={`${store.vehicles[id]?.passengers}`}
        />
        <DetailComponent
          title="Max Atmosphering Speed"
          text={`${store.vehicles[id]?.max_atmosphering_speed}`}
        />
        <DetailComponent
          title="Cargo Capacity"
          text={`${store.vehicles[id]?.cargo_capacity}`}
        />
        <DetailComponent
          title="Consumables"
          text={`${store.vehicles[id]?.consumables}`}
        />
      </div>
    </div>
  );
};

export { VehicleDetails };
