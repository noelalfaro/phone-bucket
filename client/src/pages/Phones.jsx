import React, { useState, useEffect } from "react";
// import "./Phones.css"; // Update the CSS import
import Card from "../components/Card"; // Assuming Card component can be reused for phones

const Phones = (props) => {
  // Update the component name
  const [phones, setPhones] = useState([]); // Update the state variable name

  useEffect(() => {
    setPhones(props.data); // Update the state variable
  }, [props]);

  return (
    <div className="Phones">
      {" "}
      {/* Update the component name and CSS class */}
      <main>
        {phones && phones.length > 0 ? (
          phones.map(
            (
              phone,
              index // Update mapping to phone data
            ) => (
              <Card
                id={phone.id}
                key={phone.id}
                image={phone.image}
                name={phone.name}
                pricepoint={phone.pricepoint}
                audience={phone.audience}
              />
            )
          )
        ) : (
          <h3 className="noResults">{"No Phones Yet 😞"}</h3>
        )}
      </main>
    </div>
  );
};

export default Phones; // Update the export
