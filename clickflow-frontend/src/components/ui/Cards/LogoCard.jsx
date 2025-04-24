const LogoCard = ({ data }) => {
  return (
    <div className="bg-[#925FFF] p-4 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:shadow-primary500 transition-all duration-300 text-white">
      <img
        src={data}
        alt="logo-img"
        className="w-20 h-20 sm:w-24 sm:h-36 md:w-32 md:h-48 lg:w-40 lg:h-56 object-contain mx-auto"
      />
    </div>
  );
};

export default LogoCard;
