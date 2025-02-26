import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Edit, Trash2 } from "lucide-react";
import fetchAllPremiumTasks from "../api/fetchAllPremiumTasks";
import moment from "moment";
import EditPremiumTask from "./EditPremiumTask";
import editPremiumTask from "../api/editPremiumTask";
import deletePremiumTask from "../api/deletePremiumTask";

export default function PremiumTasks() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [formData, setFormData] = useState({ status: "", commission: "", taskAmount: "", id: "", task_no : '' });

  const fetchAllTask = async () => {
    try {
      const tasks = await fetchAllPremiumTasks();
      setTasks(tasks);
    } catch (error) {
      toast.error("Failed to fetch Premium Tasks");
    }
  };

  useEffect(() => {
    fetchAllTask();
  }, []);

  const handleEdit = (task) => {
    setEditingTask(task);
    setFormData({ status: task?.status, commission: task.commission, taskAmount: task.taskAmount, id:task._id, task_no: task.task_no});
  };

  const handleDelete = async(taskId) => {
    try{
      const deleteTask = await deletePremiumTask(taskId);
      if(deleteTask.message === "Premium task deleted successfully."){
        toast.success("Task deleted successfully!");
      }
    }catch(error){
      toast.error("Failed to Delete Task");
      console.error(error.message);
    }finally{
      fetchAllTask();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const editTask = await editPremiumTask(formData, formData?.id);
      if (editTask.message === "Premium task updated successfully") {
        toast.success("Task updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update task");
      console.error(error.message);
    } finally {
      setFormData({ status: "", commission: "", taskAmount: "", id: "", task_no: '' })
      setEditingTask(null);
      fetchAllTask();
    }
  };

  return (
    <div className="px-4 mt-10">
      <h2 className="text-2xl font-semibold mb-4">Premium Tasks</h2>
      {editingTask && (
        <EditPremiumTask handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} setEditingTask={setEditingTask} />
      )}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Task Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assign On</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map((task) => (
                <tr key={task._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{task.fullName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{task.commission}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{task.taskAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{task.task_no || 0}</td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">{task?.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{moment(task.createdAt).format('MMM Do YYYY')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onClick={() => handleEdit(task)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button onClick={() => handleDelete(task._id)} className="text-red-600 hover:text-red-900 mr-2">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}