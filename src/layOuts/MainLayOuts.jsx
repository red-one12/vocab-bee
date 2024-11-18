import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


const MainLayOuts = () => {
  return (
    <div>
      {/* header */}
      <Header></Header>



    {/* dynamic content */}
    <div className="min-h-screen">

      <Outlet></Outlet>
      
    </div>




      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayOuts;