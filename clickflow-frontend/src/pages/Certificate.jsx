import { ChevronLeft } from "lucide-react";
import certificate from "../assets/certificate.jpg";
import { Link } from "react-router-dom";

const Certificate = () => {
  return (
    <div className="bg-bg-200 relative flex flex-col items-start gap-4 p-8 pt-20 md:pt-0">
      <div className="flex gap-4 pt-16 md:pt-12">
        <Link to={"/dashboard"}>
          <ChevronLeft size={32} className="text-black" />
        </Link>
        <p className="text-black">Back to Dashboard</p>
      </div>

      <img
        className="object-contain mx-auto max-h-screen"
        src={certificate}
        alt="certificate"
      />
    </div>
  );
};

export default Certificate;
