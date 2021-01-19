import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiDisplay, setSushiDisplay, onMoreClick, onEatClick, moneyLeft}) {
console.log(sushiDisplay)

console.log(typeof(sushiDisplay))

const sushiArray = Object.values(sushiDisplay) 

console.log(sushiArray)

const newSushi = sushiArray.map((sushi) => { 
   return <Sushi 
            key={sushi.id}
            sushi={sushi} 
            onEatClick={onEatClick}
            moneyLeft={moneyLeft}
            />
})

  return (
    <div className="belt">
      {newSushi}
      <MoreButton onMoreClick={onMoreClick}/>
    </div>
  );
}

export default SushiContainer;
