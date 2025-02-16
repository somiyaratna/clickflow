import React from 'react'
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function EditPremiumTask({
    handleSubmit,
    formData,
    setFormData,
    setEditingTask,
}) {
    const handelCancel = ()=>{
        setFormData({ status: "", commission: "", taskAmount: "", id: "" })
        setEditingTask(null)
    }
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Task</h3>
                    <form onSubmit={handleSubmit} className="mt-2 text-left">
                        <div className="mb-4">
                            <Label>Commission</Label>
                            <Input
                                type="number"
                                value={formData.commission}
                                onChange={(e) => setFormData({ ...formData, commission: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <Label>Total Task Amount</Label>
                            <Input
                                type="number"
                                value={formData.taskAmount}
                                onChange={(e) => setFormData({ ...formData, taskAmount: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <Label>Status</Label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                required
                                className="border rounded-md p-2 w-full"
                            >
                                <option value="not completed">Not Completed</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit" className="mr-2">Update Task</Button>
                            <Button variant="destructive" onClick={handelCancel}>Cancel</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPremiumTask