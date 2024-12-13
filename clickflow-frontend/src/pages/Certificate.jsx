import { ChevronLeft } from "lucide-react";
import certificate from "../assets/certificate.png";
import { Link } from "react-router-dom";

const Certificate = () => {
  return (
    <div className="bg-primary100 flex items-start gap-4 p-8">
      <Link to={"/dashboard"}>
        <ChevronLeft />
      </Link>

      <img
        className="object-contain mx-auto max-h-screen"
        src={certificate}
        alt="certificate"
      />
    </div>
  );
};

export default Certificate;
