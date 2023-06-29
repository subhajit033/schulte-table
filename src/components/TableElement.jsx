import React, { useState } from "react";

const TableElement = ({ number }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleCheck = (kaka) => {
    kaka === number ? setIsVisible(false) : setIsVisible(true);
  };
  return (
    <div onClick={()=>{
      handleCheck(number)
    }} className={`h-12 w-12 flex justify-center items-center text-xl ${isVisible? "bg-blue-400": "bg-orange-400"}`}>
      {number}
    </div>
  );
};
export default TableElement;
