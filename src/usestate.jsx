//useState -used to track state in functional components.
//state-> here state means

import React, { useState } from "react";

function FavoriteCar() {
  const [car, setCar] = useState("Tesla");

  return (
    <>
      <h1>My favorite car is {car}!</h1>
      <button type="button" onClick={() => setCar("Tesla")}>Tesla</button>
      <button type="button" onClick={() => setCar("BMW")}>BMW</button>
      <button type="button" onClick={() => setCar("Audi")}>Audi</button>
    </>
  );
}

export default FavoriteCar;