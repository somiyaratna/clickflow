import React, { useEffect, useState } from "react";
import { Edit, Trash2, ClipboardList, RotateCcw } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import EditUser from "./EditUser";
import fetchAllUser from "../api/fetchAllUser.js";
import editUser from "../api/editUser.js";
import ConfimationBox from "./ConfimationBox.jsx";
import deleteUser from "../api/deleteUser.js";
import PremiumTask from "./PremiumTask.jsx";
import createPremiumTask from "../api/createPremiumTask.js";
import restTask from "../api/resetTask.js";
import { set } from "date-fns";
import ConfirmationBoxReset from "./ConfirmationBoxReset.jsx";

export default function UserSection() {

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null); // State to manage confirmation dialog
  const [confirmReset, setConfirmReset] = useState(null); // State to manage confirmation dialog
  const [premiumTask, setPremiumTask] = useState({ userId: '', commission: '', taskAmount: '', task_no: ''});
  const [showPremiumTaskForm, setShowPremiumTaskForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllUsers = async () => {
    try {
      const userData = await fetchAllUser();
      setUsers(userData);
    } catch (error) {
      console.error(error.message);
      toast.error(`Error in Fetching Users Data.`);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (userId) => {
    setConfirmDelete(userId);
  };

  const confirmDeleteUser = async () => {
    if (confirmDelete) {
      try {
        const deleteduser = await deleteUser(confirmDelete)
        if(deleteduser.message === "User deleted successfully"){
          toast.success("User deleted successfully");
          fetchAllUsers()
        }
      } catch (error) {
        console.error("Error deleting user:", error);
      } finally {
        setConfirmDelete(null);
      }
    }
  };

  const cancelDelete = () => {
    setConfirmDelete(null);
  };

  const cancelReset = () => {
    setConfirmReset(null);
  };

  const editUserDetail = async (userDetail, userId) => {
    setIsLoading(true);
    try {
      const userData = await editUser(userDetail, userId);
      if(userData.message === "User details updated successfully"){
        toast.success(userData.message)
        fetchAllUsers();
        
      }
    } catch (error) {
      console.error(error.message)
      toast.error(`Error in Editing Users Data.`);
    } finally {
      setEditingUser(null);
      setIsLoading(false);
    }
  };

  const handleSave = async(updatedUser) => {
    editUserDetail(updatedUser, updatedUser._id)
    setEditingUser(null);
  };

  const handlePremiumTaskInputChange = (e) => {
    const { name, value } = e.target;
    setPremiumTask({ ...premiumTask, [name]: value });
  };

  const handlePremiumTaskSubmit = async () => {
    try{
      const task = await createPremiumTask(premiumTask);
      if(task.message === "Premium task created successfully"){
        toast.success("Premium task created successfully!");
      }else{
        toast.error("Failed to assign Premium Task")
      }
    }catch(error){
      toast.error("Failed to assign Premium Task")
      console.error(error.message)
    }finally{
      setShowPremiumTaskForm(false);
      setPremiumTask({ userId: '', commission: '', taskAmount: '' });
      fetchAllUsers();
    }
  };

  const assignPremiumTask = (userId) => {
    setPremiumTask({ ...premiumTask, userId });
    setShowPremiumTaskForm(true);
  };

  const handleReset = async (userId) => {
    try {
      const data = await restTask(confirmReset);
      if(data.message === "Task reset successfully"){
        toast.success("Task reset successfully");
        fetchAllUsers();
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.error(error.message)
      toast.error(`Error in Resetting Task.`);
    }finally {
      setConfirmReset(null);
    }
  }


  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 mt-10">
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <input 
        type="text" 
        placeholder="Search users..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wallet Balance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deposit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Task</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lifetime Earning</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.fullName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.phoneNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.wallet_balance}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.deposit}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.level}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.credit_score || 0}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.current_task}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.lifetime_earning}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onClick={() => setConfirmReset(user._id)} className="text-amber-600 hover:text-amber-900 mr-2">
                      <RotateCcw className="h-5 w-5" />
                    </button>
                    <button onClick={() => handleEdit(user)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:text-red-900 mr-2">
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <button onClick={() => assignPremiumTask(user._id)} className="text-green-600 hover:text-green-900">
                      <ClipboardList className="h-5 w-5"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isLoading && (
        <div className="fixed inset-0 bg-white/70 z-50 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {editingUser && <EditUser user={editingUser} onSave={handleSave} onCancel={() => setEditingUser(null)} />}
      {confirmDelete && <ConfimationBox cancelDelete={cancelDelete} confirmDeleteUser={confirmDeleteUser}/>}
      {showPremiumTaskForm && (
        <PremiumTask premiumTask={premiumTask} setPremiumTask={setPremiumTask} handlePremiumTaskInputChange={handlePremiumTaskInputChange} handlePremiumTaskSubmit={handlePremiumTaskSubmit} setShowPremiumTaskForm={setShowPremiumTaskForm}/>
      )}
      {confirmReset && <ConfirmationBoxReset cancelReset={cancelReset} confirmReset={handleReset}/>}
      <ToastContainer />
    </div>
  );
}