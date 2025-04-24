import star from "./../../../assets/lvl-star.png";

const MVPCard = ({ data, user }) => {
  return (
    <div className="bg-[#A4C8FF] text-[#14213d] relative p-4 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:shadow-primary500 transition-all duration-300">
      <div className="flex flex-col justify-between md:flex-row items-center mb-4 rounded-xl">
        <div className="flex flex-col lg:flex-row justify-center items-center mt-2">
          <img
            src={data.img}
            alt={`Level ${data.level}`}
            className="w-24 h-24 mr-2 object-contain"
          />
          <h3 className="text-lg font-bold">Level {data.level}</h3>
        </div>
        <span className="flex absolute top-4 right-2">
          {Array.from({ length: data.level }).map((_, index) => (
            <img key={index} src={star} alt="star" className="w-4 h-4 mr-1" />
          ))}
        </span>
      </div>
      <ul className="text-sm list-disc list-inside">
        {data.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default MVPCard;
