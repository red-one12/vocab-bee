import About from "../components/About";
import LanguageFacts from "../components/LanguageFacts";
import Slider from "../components/Slider";
import SuccessSection from "../components/SuccessSection";
import Testimonials from "../components/Testimonials";


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
      <div>
        <Testimonials></Testimonials>
      </div>
      <div>
        <LanguageFacts></LanguageFacts>
      </div>
    </div>
  );
};

export default Home;