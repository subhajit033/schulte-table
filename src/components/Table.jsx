import React from "react";
import TableElement from "./TableElement";
const Table = () => {
  const arr = [...Array(25).keys()].map((x) => {
    return x + 1;
  });
  const randomArr = [...arr];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(randomArr);
  console.log("Unsuffeled arr"+ arr);
  console.log(randomArr);
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="grid grid-cols-5 grid-rows-5 w-72 gap-y-2.5">
        {arr.map((ele, index) => {
          return <TableElement key={index} number={ele} />;
        })}
      </div>
    </div>
  );
};
export default Table;
