import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Details = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-light bg-dark d-flex">
      <img
        src="https://placekitten.com/200/300"
        className="img-thumbnail"
        alt="..."
      />
      <div className="card">
        <div className="card-body text-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
          sagittis leo, nec rhoncus nulla. Etiam quis ligula sit amet libero
          aliquam bibendum. Sed ut orci aliquam, blandit ante a, egestas eros.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Cras maximus tortor eu arcu molestie
          pellentesque. In cursus arcu odio, eu pellentesque augue semper ut.
          Nulla condimentum nisi sapien, quis scelerisque ante dapibus nec.
          Fusce sed sagittis neque. Aenean cursus commodo leo, viverra malesuada
          diam pharetra eu. In vehicula elit sed ex molestie volutpat.
        </div>
      </div>
    </div>
  );
};

export { Details };
