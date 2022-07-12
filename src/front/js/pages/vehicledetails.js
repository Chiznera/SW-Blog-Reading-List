import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailComponent } from "../component/detailcomponent";

const PlanetDetails = () => {
  const { store, actions } = useContext(Context);
  const { catagory, id } = useParams();

  useEffect(() => {
    actions.getPlanets();
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
          <div className="card-title">{store.planets[id]?.name.toString()}</div>
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
        <DetailComponent
          title="Diameter"
          text={`${store.planets[id]?.diameter} km`}
        />
        <DetailComponent
          title="Rotation Period"
          text={`${store.planets[id]?.rotation_period} hours`}
        />
        <DetailComponent
          title="Orbital Period"
          text={`${store.planets[id]?.orbital_period} days`}
        />
        <DetailComponent
          title="Gravity"
          text={`${store.planets[id]?.gravity} G`}
        />
        <DetailComponent
          title="Population"
          text={`${store.planets[id]?.population}`}
        />
        <DetailComponent
          title="Climate"
          text={`${store.planets[id]?.climate}`}
        />
        <DetailComponent
          title="Terrain"
          text={`${store.planets[id]?.terrain}`}
        />
        <DetailComponent
          title="Surface Water"
          text={`${store.planets[id]?.surface_water}%`}
        />
      </div>
    </div>
  );
};

export { PlanetDetails };
