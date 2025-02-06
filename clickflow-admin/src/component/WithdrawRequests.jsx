import React from "react";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";

const mockWithdrawRequests = [
  { id: 1, user: "John Doe", amount: 100, status: "Pending" },
  { id: 2, user: "Jane Smith", amount: 250, status: "Pending" },
  { id: 3, user: "Bob Johnson", amount: 500, status: "Pending" },
  { id: 4, user: "Alice Brown", amount: 150, status: "Pending" },
  { id: 5, user: "Charlie Davis", amount: 300, status: "Pending" },
  { id: 6, user: "Eve White", amount: 400, status: "Pending" },
  { id: 7, user: "Frank Black", amount: 600, status: "Pending" },
  { id: 8, user: "Grace Green", amount: 700, status: "Pending" },
  { id: 9, user: "Hank Blue", amount: 800, status: "Pending" },
  { id: 10, user: "Ivy Yellow", amount: 900, status: "Pending" },
  { id: 11, user: "Jack Red", amount: 1000, status: "Pending" },
  { id: 12, user: "Kathy Purple", amount: 1100, status: "Pending" },
  { id: 13, user: "Leo Orange", amount: 1200, status: "Pending" },
  { id: 14, user: "Mona Pink", amount: 1300, status: "Pending" },
  { id: 15, user: "Nina Grey", amount: 1400, status: "Pending" },
  { id: 16, user: "Oscar Cyan", amount: 1500, status: "Pending" },
  { id: 17, user: "Paul Magenta", amount: 1600, status: "Pending" },
  { id: 18, user: "Quinn Teal", amount: 1700, status: "Pending" },
  { id: 19, user: "Rita Coral", amount: 1800, status: "Pending" },
  { id: 20, user: "Sam Olive", amount: 1900, status: "Pending" },
];

export default function WithdrawRequests() {
  const [requests, setRequests] = useState(mockWithdrawRequests);

  const handleApprove = (id) => {
    setRequests(requests.map((req) => (req.id === id ? { ...req, status: "Approved" } : req)));
  };

  const handleReject = (id) => {
    setRequests(requests.map((req) => (req.id === id ? { ...req, status: "Rejected" } : req)));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Withdraw Requests</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">{request.user}</td>
                <td className="px-6 py-4 whitespace-nowrap">${request.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {request.status === "Pending" && (
                    <>
                      <Button onClick={() => handleApprove(request.id)} className="mr-2" size="sm">
                        <Check className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button onClick={() => handleReject(request.id)} variant="destructive" size="sm" className="">
                        <X className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}