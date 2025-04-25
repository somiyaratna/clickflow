import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LatestEvents = ({ events = [] }) => {
  return (
    <div className="flex flex-grow flex-col gap-16 h-full mx-auto w-full relative items-center justify-center bg-[#EFF3FB] text-[#14213D]">
      <Link to="/dashboard" className="absolute top-12 left-6">
        <ChevronLeft size={32} />
      </Link>
      <h1 className="text-2xl md:text-6xl font-semibold">
        Latest Events
      </h1>
      <div>
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="p-4 m-2 border rounded shadow-lg">
              <h2 className="text-xl font-bold">{event.title}</h2>
              <p className="text-gray-600">{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          <p className="text-xl">No events to show yet</p>
        )}
      </div>
    </div>
  );
};

export default LatestEvents;
