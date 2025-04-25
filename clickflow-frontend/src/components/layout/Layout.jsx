import Footer from "./Footer";
import Header from "./Header";
import background from "../../assets/5072612.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BottomNav from "../Home/BottomNav";

const Layout = ({ children }) => {
  // const userDetails = useSelector((state) => state.user);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!userDetails.token) {
  //     navigate("/login");
  //   }
  // }, []);
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <Header />
      <main
        className="flex-grow bg-repeat backdrop:filter bg-blur-lg"
      >
        {children}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Layout;
