import LogoCard from "./Cards/LogoCard";
import MVPCard from "./Cards/MVPCard";
import ServiceCard from "./Cards/ServiceCard";

const Section = ({ heading, data, variant }) => {
  return (
    <section className="mx-auto my-8 max-w-[1600px]">
      <h3 className="text-xl md:text-3xl text-primary800 text-center font-bold">
        {heading}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 p-4 md:p-8 gap-4 max-w-[1600px] mx-auto">
        {variant.toLowerCase() === "services" &&
          data.map((item, index) => <ServiceCard key={index} data={item} />)}
        {variant.toLowerCase() === "partners" &&
          data.map((item, index) => <LogoCard key={index} data={item} />)}
        {variant.toLowerCase() === "mvplevels" &&
          data.map((item, index) => <MVPCard key={index} data={item} />)}
      </div>
    </section>
  );
};

export default Section;
