// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [count]);

//   return <h1>rendering {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);