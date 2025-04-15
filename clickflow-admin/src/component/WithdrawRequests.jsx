import React, { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "./ui/button";
import fetchAllWithdrawRequests from "../api/fetchAllWithdrawRequests";
import changeWithdrawRequestStatus from "../api/changeWithdrawRequestStatus";

export default function WithdrawRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState({});

  const withdrawalRequest = async () => {
    try {
      setLoading(true);
      const request = await fetchAllWithdrawRequests();
      setRequests(request);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    withdrawalRequest();
  }, []);

  const handleApprove = async (id) => {
    setActionLoading((prev) => ({ ...prev, [id]: true }));
    try {
      await changeWithdrawRequestStatus(id, "accepted");
      toast.success("Withdrawal Approved!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setActionLoading((prev) => ({ ...prev, [id]: false }));
      withdrawalRequest();
    }
  };

  const handleReject = async (id) => {
    setActionLoading((prev) => ({ ...prev, [id]: true }));
    try {
      await changeWithdrawRequestStatus(id, "rejected");
      toast.error("Withdrawal Rejected!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setActionLoading((prev) => ({ ...prev, [id]: false }));
      withdrawalRequest();
    }
  };

  return (
    <div className="px-4 mt-10">
      <h2 className="text-2xl font-semibold mb-4">Withdraw Requests</h2>

      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading withdrawal requests...</div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wallet Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Network</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
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
                          <Button
                            onClick={() => handleApprove(request._id)}
                            size="sm"
                            disabled={actionLoading[request._id]}
                          >
                            {actionLoading[request._id] ? "Approving..." : (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                Approve
                              </>
                            )}
                          </Button>
                          <Button
                            onClick={() => handleReject(request._id)}
                            variant="destructive"
                            size="sm"
                            disabled={actionLoading[request._id]}
                          >
                            {actionLoading[request._id] ? "Rejecting..." : (
                              <>
                                <X className="h-4 w-4 mr-1" />
                                Reject
                              </>
                            )}
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
      )}
      <ToastContainer />
    </div>
  );
}
