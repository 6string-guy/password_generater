import React from "react";

let Card = function (props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
