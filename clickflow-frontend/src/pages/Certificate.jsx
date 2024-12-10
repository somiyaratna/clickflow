import certificate from "../assets/certificate.png";

const Certificate = () => {
  return (
    <div className="bg-primary100 ">
      <img
        className="object-contain mx-auto max-h-screen"
        src={certificate}
        alt="certificate"
      />
    </div>
  );
};

export default Certificate;
