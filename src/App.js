import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(Math.random());

  const handleClick = () => {
    setNumber(Math.random());
  };

  return (
    <div className="app text-center">
      <button className="btn btn-primary m-3" onClick={handleClick}>
        Получить число
      </button>
      <div className="alert alert-primary">{number}</div>
    </div>
  );
}
