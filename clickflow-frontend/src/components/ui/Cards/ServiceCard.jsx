import { useNavigate } from "react-router-dom";

const ServiceCard = ({ data }) => {
  const navigate = useNavigate();
  // className="bg-darkbg100 p-4 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:shadow-primary500 transition-all duration-300 text-white"
  return (
    <div
      key={Math.random(0, 1000000).toString()}
      className="flex flex-col items-center bg-darkbg100 rounded-lg p-4 md:p-8 hover:scale-[1.03] transition-all duration-300 cursor-pointer  hover:shadow-lg hover:-translate-y-1 hover:shadow-primary500"
      onClick={() => navigate(data.link)}
    >
      <div className="p-4 rounded-full bg-primary100 text-primary600">
        <data.icon size={30} />
      </div>
      <p className="text-sm md:text-base text-white mt-2 font-semibold">
        {data.label}
      </p>
    </div>
  );
};

export default ServiceCard;
