import Footer from "./Footer";
import Header from "./Header";
import background from "../../assets/5072612.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const userDetails = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userDetails.token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="flex-grow bg-repeat backdrop:filter bg-blur-lg"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
