import React from "react";

const Button = () => {

  const onclickHandler = (event) =>event.target.textContent="Ouch! 😕"


//   return <button onClick={()=>onclickHandler2("Bro")}> Click me 😉 </button>;
  return <button onClick={(event)=>onclickHandler(event)}> Click me 😉 </button>;
};

export default Button;
