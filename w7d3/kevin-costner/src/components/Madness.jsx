import { useState } from "react";

export default function Madness(props) {
  console.log("RERENDERED THE COMPONENT");

  const [number, setNumber] = useState(0);

  const incrementByOne = () => {
    setNumber((pendingState) => pendingState + 1);
    // setNumber(number + 1);
    console.log("new number is:", number + 1);
  };

  const incrementByTen = () => {
    incrementByOne(); // New number is 1, please give that to the next render
    incrementByOne(); // New number is 2, please give that to the next render
    incrementByOne();
    incrementByOne();
    incrementByOne();
    incrementByOne();
    incrementByOne();
    incrementByOne();
    incrementByOne();
    incrementByOne();
  };

  return (
    <div>
      {number}
      <button onClick={incrementByOne}>++</button>
      <button onClick={incrementByTen}>+++++++++++</button>
    </div>
  );
}
