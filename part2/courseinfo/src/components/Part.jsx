import React from "react";

const Part = ({name, exercises}) => {
  // console.log("Part Component",key, name,exercises);
  return (
    <p>
       {name} {exercises}
    </p>
  );
};

export default Part;
