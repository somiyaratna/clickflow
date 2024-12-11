import React from 'react'

function Money() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="text-center sm:text-left">
                <p className="text-2xl font-bold text-gray-800">USDT 0.00</p>
                <p className="text-sm text-gray-600">Today's Commission</p>
            </div>
            <div className="text-center border-t sm:border-t-0 sm:border-l sm:border-r border-gray-200 py-4 sm:py-0">
                <p className="text-2xl font-bold text-gray-800">100%</p>
                <p className="text-sm text-gray-600">Credit Score</p>
            </div>
            <div className="text-center sm:text-right">
                <p className="text-2xl font-bold text-red-500">USDT -25373.36</p>
                <p className="text-sm text-gray-600">Closing balance</p>
            </div>
        </div>
    )
}

export default Money