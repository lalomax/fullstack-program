import React from "react";

const Total = ({ parts }) => {
  const sum = parts.reduce((prev, cur) => prev + cur.exercises, 0);
  console.log(parts)
  return (
    <>
      <p>Total of {sum} exercises </p>
    </>
  );
};

export default Total;
