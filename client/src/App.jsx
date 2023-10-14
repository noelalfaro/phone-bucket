import "./App.css";
import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Phones from "./pages/Phones";
import CreatePhone from "./pages/CreatePhone";
import EditPhone from "./pages/EditPhone";
import PageNotFound from "./pages/PageNotFound";
import PhoneDetails from "./pages/PhoneDetails";
// import logoIMG from "./assets/logo.png";
import { Link } from "react-router-dom";

const App = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const fetchPhones = async () => {
      const response = await fetch("http://localhost:3001/phones");
      const data = await response.json();
      setPhones(data);
    };
    fetchPhones();
  }, []);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <Phones data={phones} />,
    },
    {
      path: "/phone:id",
      element: <PhoneDetails data={phones} />,
    },
    { path: "/new", element: <CreatePhone /> },
    {
      path: "edit/:id",
      element: <EditPhone data={phones} />,
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="header-left">
            {/* <img src={logoIMG} /> */}
            <h1>Phone Bucket</h1>
          </div>
          <div className="header-right">
            <Link to="/">
              <button className="homeBtn">Home</button>
              <Link to="/new">
                <button className="addBtn">Create a Phone</button>
              </Link>
            </Link>
          </div>
        </div>
      </header>

      {element}
    </div>
  );
};

export default App;
