import About from "../components/About";
import Slider from "../components/Slider";


const Home = () => {
  return (
    <div>
      <div className="h-[500px]">
      <Slider></Slider>
      </div>
      <div>
        <About></About>
      </div>
    </div>
  );
};

export default Home;