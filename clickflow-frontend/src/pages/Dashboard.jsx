import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Section from "../components/ui/Section";
import { logos, mvpLevels, services } from "./../../constants";

const Dashboard = () => {
  const userDetails = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails.token) {
      navigate("/login");
    }
  }, [navigate, userDetails.token]);

  return (
    <div className="min-h-full flex-1">
      <h1 className="text-4xl font-bold text-primary800 p-8">
        Welcome, {userDetails.user.fullName?.split(" ")[0]}
      </h1>

      {/* SERVICES */}
      <Section heading={"Our Services"} data={services} variant={"services"} />

      {/* MVP LEVELS */}
      <Section heading={"MVP Levels"} data={mvpLevels} variant={"mvplevels"} />

      {/* PARTNERS */}
      <Section heading={"Our Partners"} data={logos} variant={"partners"} />
    </div>
  );
};

export default Dashboard;
