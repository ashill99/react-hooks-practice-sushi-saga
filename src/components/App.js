import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiRoof, setSushiRoof] = useState(5)
  const [sushiFloor, setSushiFloor] = useState(0)
  const [moneyLeft, setMoneyLeft] = useState(50)
  const [sushiDisplay, setSushiDisplay] = useState("")
  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushiData => {
      sushiData = sushiData.filter(data => data.id < sushiRoof && data.id > sushiFloor)
      setSushiDisplay(sushiData)
    })
  },[sushiRoof])

  function handleMoreClick() {
    let newRoof = sushiRoof + 4 
    let newFloor = sushiFloor + 4 
    setSushiRoof(newRoof)
    setSushiFloor(newFloor)
  }

  function handleEatClick(sushi) {
    const newMoney = moneyLeft - sushi.price 
    setMoneyLeft(newMoney)
    let newPlates = plates + 1 
    setPlates(newPlates)
    // setSushiRoof(sushiRoof)
  }

  console.log(sushiDisplay)
  return (
    <div className="app">
      <SushiContainer 
        sushiDisplay={sushiDisplay} 
        setSushiDisplay={setSushiDisplay} 
        onMoreClick={handleMoreClick}
        onEatClick={handleEatClick}
        moneyLeft={moneyLeft}
        />
      <Table 
        moneyLeft={moneyLeft} 
        setMoneyLeft={setMoneyLeft}
        plates={plates}
        />
    </div>
  );
}

export default App;
