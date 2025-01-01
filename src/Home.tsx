import React from "react";
import reactLogo from "./assets/non-veg-icon.svg";
import viteLogo from "./assets/veg-icon.svg";
const Home = () => {
  return (
    <div>
      <div>
        <a href="/veg">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="/nonveg">
          <img src={reactLogo} className="logo " alt="React logo" />
        </a>
      </div>
      <h1>Menu Card</h1>

      <p className="read-the-docs">Click on the logos for menu</p>
    </div>
  );
};

export default Home;
