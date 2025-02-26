import AdminPanel from "../component/AdminPanel";

const Layout = ({ children }) => {

  return (
    <div className="flex flex-col h-screen">
      <AdminPanel />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
