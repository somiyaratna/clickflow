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
import LatestEvents from "./pages/LatestEvents";
import Starting from "./components/Starting";
import Records from "./components/Records";
import ForgotPassword from "./pages/ForgotPassword";

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
                <InvitationCode />
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
            path="/events"
            element={
              <Layout>
                <LatestEvents />
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
          <Route
            path="/starting"
            element={
              <Layout>
                <Starting/>
              </Layout>
            }
          />
          <Route
            path="/records"
            element={
              <Layout>
                <Records/>
              </Layout>
            }
          />
          <Route
            path="/forgotPassword"
            element={
              <Layout>
                <ForgotPassword/>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
