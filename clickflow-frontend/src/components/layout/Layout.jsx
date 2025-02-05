import Footer from "./Footer";
import Header from "./Header";
import background from "../../assets/background.png";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
        }}
        className="flex-grow bg-no-repeat bg-cover backdrop:filter bg-blur-lg"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
