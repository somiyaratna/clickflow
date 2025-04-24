import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="bg-[#8A53F8] bottom-4 left-1/2 lg:h-16 fixed z-50 w-full h-12 max-w-5xl -translate-x-1/2 border border-gray-200 rounded-full">
      <div className="grid h-full max-w-5xl grid-cols-5 mx-auto">
        <Link
          to="/"
          className="rounded-s-full hover:bg-gray-50 text-white hover:text-[#14213d] group inline-flex flex-col items-center justify-center px-5"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.2"
            baseProfile="tiny"
            viewBox="0 0 24 24"
            className="group-hover:text-primary lg:size-5 size-4 mb-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z" />
          </svg>
          <span className="sr-only">Home</span>
        </Link>

        <Link
          to="/records"
          className="hover:bg-gray-50 text-white hover:text-[#14213d] group inline-flex flex-col items-center justify-center px-5"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:text-primary lg:size-5 size-4 mb-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
          <span className="sr-only">Record</span>
        </Link>

        <div className="flex items-center justify-center">
          <Link
            to="/starting"
            className="hover:ring-primary hover:opacity-90 group ring-2 ring-primary focus:outline-none lg:w-20 lg:h-20 lg:-mt-10 inline-flex items-center justify-center w-10 h-10 font-medium bg-white rounded-full"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="text-primary size-7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
            <span className="sr-only">Add</span>
          </Link>
        </div>

        <Link
          to="/contact"
          className="hover:bg-gray-50 text-white hover:text-[#14213d] group inline-flex flex-col items-center justify-center px-5"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="group-hover:text-primary lg:size-5 size-4 mb-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z" />
          </svg>
          <span className="sr-only">Online</span>
        </Link>

        <Link
          to="/profile"
          className="hover:bg-gray-50 text-white hover:text-[#14213d] group rounded-e-full inline-flex flex-col items-center justify-center px-5"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="group-hover:text-primary lg:size-5 size-4 mb-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z" />
          </svg>
          <span className="sr-only">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
