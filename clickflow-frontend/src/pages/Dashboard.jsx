import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import aldiLogo from "./../assets/aldi.png";
import amazonLogo from "./../assets/amazon.png";
import bunningsWarehouseLogo from "./../assets/bunnings-warehouse.png";
import luisaviaromaLogo from "./../assets/luisaviaroma.png";
import nourishLogo from "./../assets/nourish.png";
import oneShotLogo from "./../assets/one-shot.png";
import walmartLogo from "./../assets/walmart.png";
import whelanLogo from "./../assets/whelan.png";
import MVPCard from "../components/ui/MVPCard";
import {
  FaCircleDollarToSlot,
  FaCircleInfo,
  FaUserTie,
  FaMoneyCheckDollar,
} from "react-icons/fa6";
import {
  FaShareAlt,
  FaQuestionCircle,
  FaFileAlt,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

const logos = [
  aldiLogo,
  amazonLogo,
  bunningsWarehouseLogo,
  luisaviaromaLogo,
  nourishLogo,
  oneShotLogo,
  walmartLogo,
  whelanLogo,
];

const services = [
  { label: "Latest Events", icon: FaUserTie, link: "/events" },
  { label: "Recharge", icon: FaCircleDollarToSlot, link: "/recharge" },
  { label: "Withdrawal", icon: FaHandHoldingUsd, link: "/withdrawal" },
  { label: "Invitation Code", icon: FaShareAlt, link: "/invitation" },
  { label: "Company", icon: FaCircleInfo, link: "/company" },
  { label: "T&C", icon: FaFileAlt, link: "/terms-conditions" },
  { label: "FAQs", icon: FaQuestionCircle, link: "/faqs" },
  { label: "Certificates", icon: PiCertificateBold, link: "/certificates" },
];

const Dashboard = () => {
  const userDetails = useSelector((state) => state.user);
  console.log(userDetails);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails.token) {
      navigate("/login");
    }
  }, [navigate, userDetails.token]);

  return (
    <div className="min-h-full flex-1">
      <h1 className="text-4xl font-bold text-primary800 p-8">
        Welcome, {userDetails.user.fullName.split(" ")[0]}
      </h1>

      {/* SERVICES */}
      <section className="mx-auto my-8 max-w-[1600px]">
        <h3 className="text-xl md:text-3xl text-primary800 text-center font-bold">
          Services
        </h3>
        <div className="grid grid-cols-4 p-4 md:p-8 gap-4 max-w-[1600px] mx-auto cursor-pointer">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg p-4 md:p-8 hover:scale-[1.03] transition-all duration-300"
              onClick={() => navigate(service.link)}
            >
              {service.icon({ className: "w-12 h-12 text-primary800" })}
              <p className="text-sm md:text-base text-text500 mt-2">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MVP LEVELS */}
      <section className="mx-auto my-8 max-w-[1600px]">
        <h3 className="text-xl md:text-3xl text-primary800 text-center font-bold">
          MVP Levels
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 p-4 md:p-8 gap-4 max-w-[1600px] mx-auto">
          <MVPCard level={1} />
          <MVPCard level={2} />
          <MVPCard level={3} />
          <MVPCard level={4} />
        </div>
      </section>

      {/* PARTNERS */}
      <section className="mx-auto my-8">
        <h3 className="text-xl md:text-3xl text-primary800 text-center font-bold">
          Our Partners
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 p-4 md:p-8 gap-4 max-w-[1600px] mx-auto">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white rounded-lg"
            >
              <img
                src={logo}
                alt="logo"
                className="w-20 h-20 sm:w-24 sm:h-36 md:w-32 md:h-48 lg:w-40 lg:h-56 object-contain"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
