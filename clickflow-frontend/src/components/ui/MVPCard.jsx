import star from "../../assets/lvl-star.png";
import lvlOneImg from "../../assets/lvl-1.png";
import lvlTwoImg from "../../assets/lvl-2.png";
import lvlThreeImg from "../../assets/lvl-3.png";
import lvlFourImg from "../../assets/lvl-4.png";

const levels = {
  1: {
    img: lvlOneImg,
    description: ["50$ reset 0.8% commission", "Total tasks are 45/Day"],
  },
  2: {
    img: lvlTwoImg,
    description: [
      "100$ reset 1% commission.",
      "500$ reset 1% commission.",
      "Total tasks are 50/Day.",
    ],
  },
  3: {
    img: lvlThreeImg,
    description: [
      "1000$ reset 1.2% commission.",
      "3000$ reset 1.2% commission.",
      "Total tasks are 55/Day.",
    ],
  },
  4: {
    img: lvlFourImg,
    description: ["5000$ reset 1.4% commission.", "Total tasks are 60/Day."],
  },
};

const MVPCard = ({ level }) => {
  const { img, description } = levels[level] || {};

  return (
    <div className="p-4 bg-white rounded-lg shadow-md relative">
      <div className="flex flex-col justify-between md:flex-row items-center mb-4 rounded-xl">
        <div className="flex flex-col lg:flex-row justify-center items-center mt-2">
          <img
            src={img}
            alt={`Level ${level}`}
            className="w-24 h-24 mr-2 object-contain"
          />
          <h3 className="text-lg font-bold">Level {level}</h3>
        </div>
        <span className="flex absolute top-4 right-2">
          {Array.from({ length: level }).map((_, index) => (
            <img key={index} src={star} alt="star" className="w-4 h-4 mr-1" />
          ))}
        </span>
      </div>
      <ul className="text-sm text-text500 list-disc list-inside">
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default MVPCard;
