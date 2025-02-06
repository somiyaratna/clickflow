import React from "react";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import EditUser from "./EditUser";

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "User" },
  { id: 6, name: "David Wilson", email: "david@example.com", role: "Admin" },
  { id: 7, name: "Eva White", email: "eva@example.com", role: "User" },
  { id: 8, name: "Frank Black", email: "frank@example.com", role: "User" },
  { id: 9, name: "Grace Green", email: "grace@example.com", role: "User" },
  { id: 10, name: "Hank Blue", email: "hank@example.com", role: "User" },
  { id: 11, name: "Ivy Yellow", email: "ivy@example.com", role: "User" },
  { id: 12, name: "Jack Red", email: "jack@example.com", role: "Admin" },
  { id: 13, name: "Kathy Purple", email: "kathy@example.com", role: "User" },
  { id: 14, name: "Leo Orange", email: "leo@example.com", role: "User" },
  { id: 15, name: "Mona Pink", email: "mona@example.com", role: "User" },
  { id: 16, name: "Nina Grey", email: "nina@example.com", role: "User" },
  { id: 17, name: "Oscar Cyan", email: "oscar@example.com", role: "User" },
  { id: 18, name: "Paul Magenta", email: "paul@example.com", role: "User" },
  { id: 19, name: "Quinn Teal", email: "quinn@example.com", role: "User" },
  { id: 20, name: "Rita Coral", email: "rita@example.com", role: "User" },
  { id: 21, name: "Sam Olive", email: "sam@example.com", role: "User" },
];

export default function UserSection() {
  const [users, setUsers] = useState(mockUsers);
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleSave = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEdit(user)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingUser && <EditUser user={editingUser} onSave={handleSave} onCancel={() => setEditingUser(null)} />}
    </div>
  );
}