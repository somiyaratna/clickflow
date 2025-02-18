import React, { useEffect } from "react";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "./ui/button";
import fetchAllWithdrawRequests from "../api/fetchAllWithdrawRequests";
import changeWithdrawRequestStatus from "../api/changeWithdrawRequestStatus";

export default function WithdrawRequests() {
  const [requests, setRequests] = useState([])

  const withdrawalRequest = async()=>{
    try {
      const request = await fetchAllWithdrawRequests();
      setRequests(request)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    withdrawalRequest()
  },[])
  const handleApprove = async(id) => {
    console.log(id)
    try {
      const change = await changeWithdrawRequestStatus(id, "accepted")
      toast.error("Withdrawal Rejected!")
    } catch (error) {
      console.error(error);
    }finally{
      withdrawalRequest()
    }
  }

  const handleReject = async(id) => {
    try {
      const change = await changeWithdrawRequestStatus(id, "rejected")
      toast.success("Withdrawal Approved!")
    } catch (error) {
      console.error(error);
    }finally{
      withdrawalRequest()
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Withdraw Requests</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wallet Address 
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Network
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{request.fullName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${request.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{request.wallet_address}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{request.network}</td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">{request.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {request.status === "pending" && (
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button onClick={() => handleApprove(request._id)} size="sm">
                          <Check className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button onClick={() => handleReject(request._id)} variant="destructive" size="sm">
                          <X className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}