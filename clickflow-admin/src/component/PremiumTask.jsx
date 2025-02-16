import React from 'react'

function PremiumTask({
    premiumTask,
    setPremiumTask,
    handlePremiumTaskInputChange,
    handlePremiumTaskSubmit,
    setShowPremiumTaskForm
}) {
    const handleCancel = ()=>{
        setPremiumTask({ userId: '', commission: '', taskAmount: '' });
        setShowPremiumTaskForm(false)
    }
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Create Premium Task</h3>
                <input
                    type="text"
                    name="commission"
                    placeholder="Commission"
                    value={premiumTask.commission}
                    onChange={handlePremiumTaskInputChange}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="number"
                    name="taskAmount"
                    placeholder="Task Amount"
                    value={premiumTask.taskAmount}
                    onChange={handlePremiumTaskInputChange}
                    className="border p-2 mb-2 w-full"
                />
                <button onClick={handlePremiumTaskSubmit} className="bg-blue-500 text-white p-2 rounded">Submit</button>
                <button onClick={handleCancel} className="bg-gray-500 text-white p-2 rounded ml-2">Cancel</button>
            </div>
        </div>
    )
}

export default PremiumTask