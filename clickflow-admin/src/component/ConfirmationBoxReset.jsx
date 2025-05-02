import React from 'react'
import { Button } from './ui/button'

function ConfirmationBoxReset({ cancelReset, confirmReset }) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded shadow-lg">
                <h3 className="text-lg">Are you sure you want to Reset Task of this user?</h3>
                <div className="flex justify-end mt-4 gap-4">
                    <Button onClick={cancelReset} size="sm">No</Button>
                    <Button onClick={confirmReset} variant="destructive" size="sm">Yes</Button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationBoxReset