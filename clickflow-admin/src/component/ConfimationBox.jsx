import React from 'react'
import { Button } from './ui/button'

function ConfimationBox({cancelDelete, confirmDeleteUser}) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded shadow-lg">
                <h3 className="text-lg">Are you sure you want to delete this user?</h3>
                <div className="flex justify-end mt-4 gap-4">
                    <Button onClick={cancelDelete} size="sm">No</Button>
                    <Button onClick={confirmDeleteUser} variant="destructive" size="sm">Yes</Button>
                </div>
            </div>
        </div>
    )
}

export default ConfimationBox