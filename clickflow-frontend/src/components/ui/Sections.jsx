import MVPCard from "./MVPCard";

const Sections = ({ heading, data }) => {
  return (
    <section className="mx-auto my-8 max-w-[1600px]">
      <h3 className="text-xl md:text-3xl text-primary800 text-center font-bold">
        {heading}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 p-4 md:p-8 gap-4 max-w-[1600px] mx-auto">
        {data.map((logo, index) => (
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
  );
};

export default Sections;
