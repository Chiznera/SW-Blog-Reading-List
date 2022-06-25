import React from "react";

const Card = ({ img, title, link, text }) => {
  return (
    <div className="card bg-light text-dark m-3" style={{ width: "18rem" }}>
      <img
        src={img ? img : "https://placekitten.com/200/300"}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title : "Placeholder Title"}</h5>
        <p className="card-text">{text}</p>
        <a href={link ? link : "#"} className="btn btn-primary">
          Learn More!
        </a>
      </div>
    </div>
  );
};

export { Card };
