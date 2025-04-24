import React from 'react';
import ExclusiveGrid from './ExclusiveGrid';

const ExclusiveDashboard = ({user, task, total_task, commission}) => {
  return (
    <div className="pt-6 pb-16">
      <div className="rounded-2xl  container mx-auto">
        <ExclusiveGrid user={user} commission={commission}/>
      </div>

      <div className="rounded-2xl bg-gray-50 container p-6 mx-auto mt-5 text-center">
        <p className="text-primary text-lg font-semibold leading-6 tracking-wide text-left">
          Today's achievements
        </p>
        <div className="lg:grid-cols-4 lg:gap-0 lg:divide-x-2 grid grid-cols-1 gap-10 mt-6">
          <div className="flex flex-col items-center">
            <p className="text-[#b45309]">Comission</p>
            <p className="font-semibold">{commission}%</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#b45309]">Available Balance</p>
            <p className="font-semibold">{user?.wallet_balance}USDT</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#b45309]">Orders Completed</p>
            <p className="font-semibold">{task ? task?.task_count : 0}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#b45309]">Total Orders</p>
            <p className="font-semibold">{task ? task?.total_task : total_task}</p>
          </div>
        </div>
        <p className="lg:text-sm lg:leading-6 mt-10 text-xs font-normal tracking-wide text-left text-black">
          A higher rank member can unlock more orders and get more commission
        </p>
      </div>

      <div className="rounded-2xl bg-gray-50 container p-6 mx-auto mt-5 space-y-3">
        <p className="text-primary text-lg font-semibold leading-6 tracking-wide text-left">
          Rules Description
        </p>
        <p className="lg:text-sm text-xs font-normal leading-6 tracking-wide text-left text-black">
          (1) Every user in the platform should be able to submit all daily orders before withdrawal
        </p>
        <p className="lg:text-sm text-xs font-normal leading-6 tracking-wide text-left text-black">
          (2) commissions depends on the vip level
        </p>
        <p className="lg:text-sm text-xs font-normal leading-6 tracking-wide text-left text-black">
          (3) The system automatically dispatch’s the products through the cloud after submission
        </p>
        <p className="lg:text-sm text-xs font-normal leading-6 tracking-wide text-left text-black">
          (4) If the order is not submitted, the user will not be able to continue with the next product. The user need to submit the previous product to continue with the task
        </p>
      </div>
    </div>
  );
};

export default ExclusiveDashboard;
