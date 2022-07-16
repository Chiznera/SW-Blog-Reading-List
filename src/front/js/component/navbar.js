import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png"
            style={{ width: "8rem" }}
          />
        </Link>
        <div className="ml-auto">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {store.favorites.length}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>
                  <button className="dropdown-item">{item.name}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
