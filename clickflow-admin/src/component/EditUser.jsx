"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function EditUser({ user, onSave, onCancel }) {
  const [editedUser, setEditedUser] = useState(user);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(editedUser);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Edit User</h3>
          <form onSubmit={handleSubmit} className="mt-2 text-left">
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="fullName" value={editedUser.fullName} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" value={editedUser.email} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <Label htmlFor="phoneNo">Phone Number</Label>
              <Input type="text" id="phoneNo" name="phoneNo" value={editedUser.phoneNo} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" name="username" value={editedUser.username} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <Label htmlFor="wallet_balance">Wallet Balance</Label>
              <Input type="number" id="wallet_balance" name="wallet_balance" value={editedUser.wallet_balance} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <Label htmlFor="wallet_balance">Deposit</Label>
              <Input type="number" id="deposit" name="deposit" value={editedUser?.deposit} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <Label htmlFor="level">Level</Label>
              <Input type="text" id="level" name="level" value={editedUser.level} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <Label htmlFor="credit_score">Credit Score</Label>
              <Input type="text" id="credit_score" name="credit_score" value={editedUser?.credit_score} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <Label htmlFor="level">Lifetime Earning</Label>
              <Input type="text" id="lifetime_earning" name="lifetime_earning" value={editedUser.lifetime_earning} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <Label htmlFor="current_task">Current Task</Label>
              <Input type="text" id="current_task" name="current_task" value={editedUser.current_task} onChange={handleChange} />
            </div>
            <div className="flex justify-end">
              <Button type="button" variant="outline" onClick={onCancel} className="mr-2">
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}