import { useNavigate } from "react-router-dom";
import aldiLogo from "./../assets/aldi.png";
import amazonLogo from "./../assets/amazon.png";
import bunningsWarehouseLogo from "./../assets/bunnings-warehouse.png";
import luisaviaromaLogo from "./../assets/luisaviaroma.png";
import nourishLogo from "./../assets/nourish.png";
import oneShotLogo from "./../assets/one-shot.png";
import walmartLogo from "./../assets/walmart.png";
import whelanLogo from "./../assets/whelan.png";
import MVPCard from "../components/common/MVPCard";

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

const Dashboard = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/login");
  // }, [navigate]);

  return (
    <div className="min-h-full flex-1">
      <section className="mx-auto my-8 max-w-[1600px]">
        <h3 className="text-3xl text-center font-bold">MVP Levels</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 p-4 md:p-8 gap-4 max-w-[1600px] mx-auto">
          <MVPCard level={1} />
          <MVPCard level={2} />
          <MVPCard level={3} />
          <MVPCard level={4} />
        </div>
      </section>

      <section className="mx-auto my-8">
        <h3 className="text-3xl text-center font-bold">Our Partners</h3>
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
