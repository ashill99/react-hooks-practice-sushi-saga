import React from "react";

function Table({ plates = [], moneyLeft, setMoneyLeft }) {
  // renders an empty plate for every element in the array

  const newPlates = Object.values(plates) 

  const emptyPlates = newPlates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${/* Give me how much money I have left */}{`${moneyLeft}`} remaining!
      </h1>
      <div className="table"> 
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
