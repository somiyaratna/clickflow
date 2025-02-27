import { ChevronLeft } from "lucide-react";
import certificate from "../assets/certificate.jpg";
import { Link } from "react-router-dom";

const Certificate = () => {
  return (
    <div className="bg-bg-200 relative flex flex-col items-start gap-4 p-8">
      <div className="flex gap-4">
        <Link to={"/dashboard"}>
          <ChevronLeft size={32} className="text-white" />
        </Link>
        <p className="text-white">Back to Dashboard</p>
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
