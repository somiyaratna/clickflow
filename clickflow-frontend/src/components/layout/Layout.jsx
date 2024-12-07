import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    // <div className="flex flex-col w-full h-full justify-center items-center">
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow bg-primary100">{children}</main>
      <Footer />
    </div>
    // </div>
  );
};

export default Layout;
