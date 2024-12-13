import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Certificate from "./pages/Certificate";
import FAQs from "./pages/FAQs";
import TermsAndConditions from "./pages/TermsAndConditions";
import AboutCompany from "./pages/AboutCompany";
import InvitationCode from "./pages/InvitationCode";
import Contact from "./pages/Contact";
import Withdrawal from "./pages/Withdrawal";
import Recharge from "./pages/Recharge";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/company"
            element={
              <Layout>
                <AboutCompany />
              </Layout>
            }
          />
          <Route
            path="/invitation"
            element={
              <Layout>
                <InvitationCode invitationCode={"MYVVARGD"} />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/certificates"
            element={
              <Layout>
                <Certificate />
              </Layout>
            }
          />
          <Route
            path="/withdrawal"
            element={
              <Layout>
                <Withdrawal />
              </Layout>
            }
          />
          <Route
            path="/terms-conditions"
            element={
              <Layout>
                <TermsAndConditions />
              </Layout>
            }
          />
          <Route
            path="/recharge"
            element={
              <Layout>
                <Recharge />
              </Layout>
            }
          />
          <Route
            path="/faqs"
            element={
              <Layout>
                <FAQs />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
