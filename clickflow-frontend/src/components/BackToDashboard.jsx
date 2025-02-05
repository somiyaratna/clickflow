import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackToDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4" onClick={() => navigate("/dashboard")}>
      <ChevronLeft size={32} className="text-white" />
      <p className="text-white">Back to Dashboard</p>
    </div>
  );
};

export default BackToDashboard;
