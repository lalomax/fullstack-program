import React from "react";

const Total = ({ parts }) => {
  const sum = parts.reduce((prev, cur) => prev + cur.exercises, 0);
  console.log(parts)
  return (
    <>
      <h3>Total of {sum} exercises </h3>
    </>
  );
};

export default Total;
