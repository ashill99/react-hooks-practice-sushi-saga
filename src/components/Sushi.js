import React, {useState} from "react";

function Sushi({sushi, onEatClick, moneyLeft}) {

    const [isEaten, setIsEaten] = useState(false)

    function handleEatSushiClick() {
      if (moneyLeft >= sushi.price) {
        console.log('sushi comp click')
        setIsEaten(true)
          if (!isEaten) onEatClick(sushi)
      } else {
        console.log('no money')
      }
    }
  return (
    <div className="sushi" key={sushi.id}>
      <div key={sushi.id} className="plate" onClick={handleEatSushiClick}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
