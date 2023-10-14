import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./Card.css";
// import more from "./more.png";

const Card = (props) => {
  const [phone, setPhone] = useState({
    id: 0,
    name: "",
    pricepoint: "",
    audience: "",
    image: "",
  });

  useEffect(() => {
    setPhone({
      id: props.id,
      name: props.name,
      pricepoint: props.pricepoint,
      audience: props.audience,
      image: props.image,
    });
  }, [props]);

  return (
    <div className="card">
      <div
        className="top-container"
        style={{ backgroundImage: `url(${phone.image})` }}
      >
        <Link to={"/edit/" + phone.id}>{/* <img src={more} /> */}</Link>
      </div>
      <div className="bottom-container">
        <h3>{phone.name}</h3>
        <p>{"Price: " + phone.pricepoint}</p>
        <p>{"Great For: " + phone.audience}</p>
        <Link to={"/phone/" + phone.id}>Read More →</Link>{" "}
        {/* Update the route */}
      </div>
    </div>
  );
};

export default Card;
