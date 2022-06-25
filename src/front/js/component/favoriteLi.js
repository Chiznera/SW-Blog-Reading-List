import React, { useContext } from "react";
import { Context } from "../store/appContext";

const FavoriteLi = () => {
  const { store, actions } = useContext(Context);

  return (
    <li>
      <a className="dropdown-item" href={store.favorites.url}>
        {store.favorites.name}
      </a>
    </li>
  );
};

export { FavoriteLi };
