import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

const People = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
  }, []);

  return (
    <div className="container text-light bg-dark">
      <div className="row">
        <div className="hiddenScroll d-flex flex-row">
          {store.people.map((people, index) => (
            <div>
              <Card
                title={people.name}
                link={"/people/" + index}
                key={index}
                text={
                  <>
                    Gender: {people.gender ? people.gender : "Placeholder Text"}
                    <br />
                    Hair Color:{" "}
                    {people.hair_color ? people.hair_color : "Placeholder Text"}
                    <br />
                    Eye Color:{" "}
                    {people.eye_color ? people.eye_color : "Placeholder Text"}
                    <br />
                    Birth Year:{" "}
                    {people.birth_year ? people.birth_year : "Placeholder Text"}
                  </>
                }
                func={actions.addFavorite}
                item={people}
              />
            </div>
          ))}
          {/* <Card /> */}
        </div>
      </div>
    </div>
  );
};

export { People };
