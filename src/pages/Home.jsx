import About from "../components/About";
import LanguageFacts from "../components/LanguageFacts";
import Slider from "../components/Slider";
import SuccessSection from "../components/SuccessSection";
import Testimonials from "../components/Testimonials";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import { useEffect } from "react"; // Import useEffect hook



const Home = () => {
  useEffect(() => {
   
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false, 
    });
  }, []);

  return (
    <div>
      <div className="h-[500px]">
      <Slider></Slider>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
        <About></About>
      </div>



      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400"> 
        <SuccessSection></SuccessSection>
      </div>



      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
        <Testimonials></Testimonials>
      </div>



      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
        <LanguageFacts></LanguageFacts>
      </div>
      

    </div>
  );
};

export default Home;