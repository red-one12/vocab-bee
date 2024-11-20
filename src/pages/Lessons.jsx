import { useLoaderData } from "react-router-dom";


const Lessons = () => {
  const allWord = useLoaderData();
  
  console.log(allWord);
  
  return (
    <div>
      this is lessons
    </div>
  );
};

export default Lessons;