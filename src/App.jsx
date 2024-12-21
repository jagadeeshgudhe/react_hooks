import React, { useState } from "react";

function FavoriteAnimal() {
  const [animal, setAnimal] = useState("Dog");

  return (
    <>
      <h1>My favorite animal is {animal}!</h1>
      <button type="button" onClick={() => setAnimal("Dog")}>Dog</button>
      <button type="button" onClick={() => setAnimal("Cat")}>Cat</button>
      <button type="button" onClick={() => setAnimal("Rabbit")}>Rabbit</button>
      <button type="button" onClick={() => setAnimal("Bird")}>Bird</button>
    </>
  );
}

export default FavoriteAnimal;
