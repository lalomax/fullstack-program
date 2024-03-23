import Part from "./Part";


const Content = ({ parts }) => {
  return (
    <>
    {
      parts.map(part => (<Part part1={part.name} exercises1={part.exercises} />))
    }
    </>
  );
};

export default Content;
