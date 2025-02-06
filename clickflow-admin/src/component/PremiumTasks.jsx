import React from "react";
import { useState } from "react";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

const mockUsers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
];

export default function PremiumTasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    deadline: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, { ...newTask, id: Date.now() }]);
    setNewTask({
      title: "",
      description: "",
      assignedTo: "",
      deadline: "",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Premium Tasks</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <Label htmlFor="title">Task Title</Label>
          <Input id="title" name="title" value={newTask.title} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="description">Task Description</Label>
          <Textarea id="description" name="description" value={newTask.description} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="assignedTo">Assign To</Label>
          <select
            id="assignedTo"
            name="assignedTo"
            value={newTask.assignedTo}
            onChange={(e) => setNewTask((prev) => ({ ...prev, assignedTo: e.target.value }))}
            required
            className="w-full px-4 py-2 border rounded"
          >
            <option value="" disabled>Select a user</option>
            {mockUsers.map((user) => (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <Label htmlFor="deadline">Deadline</Label>
          <Input type="date" id="deadline" name="deadline" value={newTask.deadline} onChange={handleInputChange} required />
        </div>
        <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Assign Task
        </Button>
      </form>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="px-6 py-4 whitespace-nowrap">{task.title}</td>
                <td className="px-6 py-4">{task.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{task.assignedTo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{task.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
