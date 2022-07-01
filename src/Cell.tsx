import { useState } from "react";

function Cell() {

  const [isAlive, setLife] = useState(false)

  return (
    <button 
      className={`cell ${isAlive ? "alive" : "dead"}`}
      onClick={() => setLife(!isAlive)}
    >
      
    </button>
  )
}

export default Cell;