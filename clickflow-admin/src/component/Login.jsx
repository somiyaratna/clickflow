import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import { addUserData } from '../redux/userSlice';
import login from '../api/login';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 
    const [showPassword, setShowPassword] = useState(false); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginSubmit = async(e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }
        setLoading(true);
        try {
            const data = await login(username, password);
            if(data.message === "Login successful"){
                toast.success(data.message);
                dispatch(addUserData(data));
                navigate("/");
            }
            setUsername('');
            setPassword('');
            setError('');
        } catch (error) {
            toast.error("Admin not found or not verified");
            console.error(error.message);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleLoginSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-2xl mb-4 text-center">Login</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="border rounded-md p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border rounded-md p-2 w-full"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)} 
                            className="absolute right-2 top-2 text-gray-500"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <button 
                    type="submit" 
                    className={`w-full ${loading ? "bg-gray-400" : "bg-blue-500"} text-white p-2 rounded-md hover:bg-blue-600`} 
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
                <button type="button" onClick={() => navigate("/register")} className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 mt-2">New Registration</button>
                <p onClick={()=> navigate("/forgotpassword")} className='text-sm cursor-pointer text-blue-600 text-center mt-4 hover:underline'>Forget Password or Change Password</p>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Login;