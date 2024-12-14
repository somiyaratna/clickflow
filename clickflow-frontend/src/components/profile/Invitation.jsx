import React from "react";

function Invitation() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-2">Invite Friends</h2>
      <p className="text-lg">Share to your friends and win more!</p>
      <button className="mt-4 bg-white text-primary600 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-primary100">
        Share Now
      </button>
    </div>
  );
}

export default Invitation;
