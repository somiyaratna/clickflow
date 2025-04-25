import Button from "../components/ui/Button";
import img1 from "../assets/imgload.gif";
import { Toaster, toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import fetchSingleProduct from "../api/fetchSingleProduct";
import moment from "moment";
import taskSubmission from "../api/taskSumbmission";
import fetchDailyTaskData from "../api/fetchDailyTaskData";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";
import star from "../assets/lvl-star.png";
import fetchSingleUser from "../api/fetchSingleUser";

function Task({ setIsModalOpen }) {

    const [user, setUser] = useState(null);
    const [product, setProduct] = useState(null);
    const [commission, setCommission] = useState(0);
    const userDetails = useSelector((state) => state.user);
    const [taskData, setTaskData] = useState(null);
    const [task, setTask] = useState(0);
    const [isTaskLoading, setIsTaskLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setUser(userDetails.user);
    }, [userDetails]);

    useEffect(() => {
        if (!userDetails.token) {
            dispatch(logout());
            navigate("/login");
        }
        setUser(userDetails.user)
    }, []);

    const fetchProduct = async () => {
        setIsTaskLoading(true);
        try {
            if (user) {
                if (userData?.deposit <= 0) {
                    toast.error("You have not made any deposit yet. Please contact customer care for assistance.")
                }
                const product = await fetchSingleProduct(user?._id, user?.deposit, user?.level);
                setProduct(product);
                setCommission(product.commission)
                setIsTaskLoading(false);
            }
        } catch (error) {
            toast.error("You have not made any deposit yet. Please contact customer care for assistance.");
            console.error(error.message);
            setIsTaskLoading(false);
        }
    }
    const fetchUser = async () => {
        try {
            if (user) {
                const data = await fetchSingleUser(user?._id);
                setUserData(data)
            }
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        fetchUser()
    }, [user])
    useEffect(() => {
        fetchProduct();
    }, [user]);

    const dailyTask = async () => {
        try {
            if (user) {
                const data = await fetchDailyTaskData(user?._id);
                if (data.message === "success") {
                    setTaskData(data.dailyTask);
                }
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const submitTask = await taskSubmission(user?._id, product?.title, product.price, product?.image_url, product?.category, product?.description, commission, userDetails?.token);
            if (submitTask.message === "New daily task created" || submitTask.message === "Task count updated") {
                toast.success("Task Completed Successfully.");
                fetchProduct();
                dailyTask();
                setCommission(0);
            } else if (submitTask.message === "All Tasks are Completed for today" || submitTask.message === "Wallet Amount is Less Than Task Amount") {
                toast.error(submitTask.message);
            } else if (submitTask.message === "Token is not valid.") {
                dispatch(logout());
                navigate("/login");
            } else {
                toast.error("Contact to Customer Care.");
            }
        } catch (error) {
            toast.error("Contact to Customer Care.");
            console.error(error.message);
        } finally {
            setLoading(false);
            setIsModalOpen(false);
        }
    }

    // useEffect(() => {
    //     if (user?.level === 1) {
    //         setCommission(Math.round((parseFloat(product?.price) * 0.8) / 100 * 1000) / 1000);
    //     }
    //     if (user?.level === 2) {
    //         setCommission(Math.round((parseFloat(product?.price) * 1) / 100 * 1000) / 1000);
    //     }
    //     if (user?.level === 3) {
    //         setCommission(Math.round((parseFloat(product?.price) * 1.2) / 100 * 1000) / 1000);
    //     }
    //     if (user?.level === 4) {
    //         setCommission(Math.round((parseFloat(product?.price) * 1.4) / 100 * 1000) / 1000);
    //     }
    // }, [product, user]);

    useEffect(() => {
        dailyTask();
        if (user?.level === 1) {
            setTask(45);
        }
        if (user?.level === 2) {
            setTask(50);
        }
        if (user?.level === 3) {
            setTask(55);
        }
        if (user?.level === 4) {
            setTask(60);
        }
    }, [user]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] max-w-sm rounded-lg shadow-xl relative">
                {isTaskLoading && (
                    <div className="absolute w-full h-full bg-white/100 z-50 flex items-center justify-center rounded-lg">
                        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <div className="p-4 border-b text-center relative">
                    <h2 className="text-xl font-semibold">Task Submission</h2>
                    <button
                        className="absolute text-[20px] top-3 right-3 text-gray-500 hover:text-gray-700"
                        onClick={() => setIsModalOpen(false)}
                    >
                        &times;
                    </button>
                </div>

                <div className="p-4 text-center">
                    <img
                        draggable="false"
                        src={product?.image_url || img1}
                        alt="Product"
                        className="mx-auto h-24 w-24 object-cover mb-2"
                    />
                    <h3 className="font-medium">{product?.title}</h3>
                    <p className="font-bold text-lg">${product?.price}</p>
                    <div className="flex justify-center mt-1 mb-4">
                        {Array(5).fill().map((_, i) => (
                            <img src={star} alt="star" className="h-5 mx-0.5" key={i} />
                        ))}
                    </div>

                    <div className="flex justify-between text-sm border-y py-3 mb-4">
                        <div>
                            <p className="font-semibold">Total Amount</p>
                            <p className="text-blue-800">USDT {product?.price}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Task Commissions</p>
                            <p className="text-blue-800">USDT {commission}</p>
                        </div>
                    </div>

                    <div className="text-left mb-8 text-sm">
                        <p><span className="font-medium">Created Time:</span> {moment().format("hh:mm:ss A")}</p>
                    </div>

                    <button
                        className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Task;
