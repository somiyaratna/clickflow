import MVPCard from "./MVPCard";

const Sections = ({ heading, data }) => {
  return (
    <section className="mx-auto my-8 max-w-[1600px]">
      <h3 className="text-xl md:text-3xl text-primary800 text-center font-bold">
        {heading}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 p-4 md:p-8 gap-4 max-w-[1600px] mx-auto">
        <MVPCard level={1} />
        <MVPCard level={2} />
        <MVPCard level={3} />
        <MVPCard level={4} />
      </div>
    </section>
  );
};

export default Sections;
