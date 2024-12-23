import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>Hello {user}!</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h2>Component 2</h2>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h2>Component 3</h2>
      <Component4 />
    </>
  );
}

function Component4() {
  const user = useContext(UserContext); // Consume context here
  return <h2>Welcome, {user}!</h2>;
}

export default Component1;
