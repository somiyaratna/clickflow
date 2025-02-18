import React from "react";

function Money({taskData, userData}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-darkbg100 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="text-center sm:text-left">
        <p className="text-2xl font-bold text-white">USDT {taskData?.today_commission}</p>
        <p className="text-sm text-white">Today&apos;s Commission</p>
      </div>
      <div className="text-center border-t sm:border-t-0 sm:border-l sm:border-r border-gray-200 py-4 sm:py-0">
        <p className="text-2xl font-bold text-white">100%</p>
        <p className="text-sm text-white">Credit Score</p>
      </div>
      <div className="text-center sm:text-right">
        <p className={`text-2xl font-bold ${userData?.wallet_balance < 0 ? 'text-red-500' : userData?.wallet_balance === 0 ? 'text-black' : 'text-green-500'}`}>USDT {userData?.wallet_balance}</p>
        <p className="text-sm text-white">Closing balance</p>
      </div>
    </div>
  );
}

export default Money;
