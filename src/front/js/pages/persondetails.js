import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailComponent } from "../component/detailcomponent";

const PersonDetails = () => {
  const { store, actions } = useContext(Context);
  const { catagory, id } = useParams();

  useEffect(() => {
    actions.getPeople();
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
          <div className="card-title">{store.people[id]?.name.toString()}</div>
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
          title="Birth Year"
          text={`${store.people[id]?.birth_year}`}
        />
        <DetailComponent
          title="Eye Color"
          text={`${store.people[id]?.eye_color}`}
        />
        <DetailComponent
          title="Hair Color"
          text={`${store.people[id]?.hair_color}`}
        />
        <DetailComponent
          title="Height"
          text={`${store.people[id]?.height} cm`}
        />
        <DetailComponent title="Mass" text={`${store.people[id]?.mass} kg`} />
        <DetailComponent
          title="Skin Color"
          text={`${store.people[id]?.skin_color}`}
        />
      </div>
    </div>
  );
};

export { PersonDetails };
