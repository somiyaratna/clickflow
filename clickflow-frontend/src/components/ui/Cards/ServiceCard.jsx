import { useNavigate } from "react-router-dom";

const ServiceCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      key={Math.random(0, 1000000).toString()}
      className="flex flex-col items-center bg-white rounded-lg p-4 md:p-8 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
      onClick={() => navigate(data.link)}
    >
      <div className="p-4 rounded-full bg-primary100 text-primary800">
        <data.icon />
      </div>
      <p className="text-sm md:text-base text-text500 mt-2">{data.label}</p>
    </div>
  );
};

export default ServiceCard;
