import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";


const MainLayOuts = () => {
  return (
    <div>
      <Toaster></Toaster>
      {/* header */}
      <Header></Header>



    {/* dynamic content */}
    <div className="min-h-screen">

      <Outlet></Outlet>
      
    </div>




      {/* footer */}

      

      <div className="bg-[#1d1b28]">
      <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayOuts;