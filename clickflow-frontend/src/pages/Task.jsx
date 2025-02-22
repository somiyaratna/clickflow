import Button from "../components/ui/Button";
import amplifier from "../assets/screen-amplifier.jpg";
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

function Task() {

    const [user, setUser] = useState(null);
    const [product, setProduct] = useState(null);
    const [commission, setCommission] = useState(0);
    const userDetails = useSelector((state) => state.user);
    const [taskData, setTaskData] = useState(null);
    const [task, setTask] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setUser(userDetails.user);
    }, [userDetails]);

    const fetchProduct = async () => {
        try {
            if (user?.deposit > 0) {
                const product = await fetchSingleProduct(user?.deposit);
                setProduct(product);
            }
        } catch (error) {
            toast.error("Please Contact Customer Care.");
            console.error(error.message);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [user]);
    
    const dailyTask = async () => {
        try {
            if (user) {
                const data = await fetchDailyTaskData(user?._id);
                if (data.message === "success") {
                    setTaskData(data.dailyTask);
                } else {
                    toast.error("Failed to fetch daily tasks.");
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
            setCommission(0);
            fetchProduct();
            setLoading(false); 
        }
    }

    useEffect(() => {
        if (user?.level === 1) {
            setCommission(Math.round((parseFloat(product?.price) * 0.8) / 100 * 1000) / 1000);
        }
        if (user?.level === 2) {
            setCommission(Math.round((parseFloat(product?.price) * 1) / 100 * 1000) / 1000);
        }
        if (user?.level === 3) {
            setCommission(Math.round((parseFloat(product?.price) * 1.2) / 100 * 1000) / 1000);
        }
        if (user?.level === 4) {
            setCommission(Math.round((parseFloat(product?.price) * 1.4) / 100 * 1000) / 1000);
        }
    }, [product, user]);

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
        <div className="min-h-screen p-4 md:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                        Tasks
                    </h1>
                    <p className="text-white">Yours tasks will be shown here</p>
                </div>

                <div className="bg-darkbg100 rounded-xl shadow-sm p-4 md:p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <time className="text-sm text-white">
                            {moment().format('ddd, MMM Do YYYY, h:mm A')}
                        </time>
                        <span className="px-3 py-1 bg-green-200 text-green-600 rounded-full text-sm font-medium">
                            Pending
                        </span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-16 h-16 md:w-20 md:h-20">
                            <img
                                src={product?.image_url}
                                alt={product?.title}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-medium text-white mb-1">
                                {product?.title}
                            </h3>
                            <div className="flex">
                                <img src={star} className="h-6" alt="" /> 
                                <img src={star} className="h-6" alt="" /> 
                                <img src={star} className="h-6" alt="" /> 
                                <img src={star} className="h-6" alt="" /> 
                                <img src={star} className="h-6" alt="" /> 
                            </div>
                            <p className="text-lg text-white font-semibold">${product?.price || 0}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        <div className="space-y-2">
                            <h4 className="text-sm font-medium text-white">Total Amount</h4>
                            <p className="text-2xl font-bold text-white">${product?.price || 0}</p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-sm font-medium text-white">
                                Commission
                            </h4>
                            <p className="text-2xl font-bold text-white">${isNaN(commission) ? 0 : commission}</p>
                        </div>
                    </div>
                </div>

                <Button onClick={handleSubmit} width={"full"} disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </Button>
            </div>
            <div className="text-center text-sm text-white mt-6">{taskData ? `(${taskData.task_count}/${taskData?.total_task})` : `(0/${task})`}</div>
            <Toaster />
        </div>
    );
}

export default Task;
