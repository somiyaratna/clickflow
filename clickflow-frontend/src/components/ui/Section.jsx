import LogoCard from "./Cards/LogoCard";
import MVPCard from "./Cards/MVPCard";
import ServiceCard from "./Cards/ServiceCard";

const Section = ({ heading, data, variant, user }) => {
  const filteredMVPData = user?.level ? data.slice(0, user.level) : data;

  return (
    <section className="mx-auto my-8 max-w-[1600px]">
      <h3 className="text-xl md:text-3xl text-white text-center font-bold">
        {heading}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 p-4 md:p-8 gap-4 max-w-[1600px] mx-auto">
        {variant.toLowerCase() === "services" &&
          data.map((item, index) => <ServiceCard key={index} data={item} />)}
        {variant.toLowerCase() === "partners" &&
          data.map((item, index) => <LogoCard key={index} data={item} />)}
        {variant.toLowerCase() === "mvplevels" &&
          filteredMVPData.map((item, index) => <MVPCard key={index} data={item} user={user}/>)}
      </div>
    </section>
  );

};
export default Section;
