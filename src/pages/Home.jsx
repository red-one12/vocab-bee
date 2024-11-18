import About from "../components/About";
import Slider from "../components/Slider";
import SuccessSection from "../components/SuccessSection";


const Home = () => {
  return (
    <div>
      <div className="h-[500px]">
      <Slider></Slider>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <SuccessSection></SuccessSection>
      </div>
    </div>
  );
};

export default Home;