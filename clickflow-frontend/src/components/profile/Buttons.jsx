import React from 'react'
import { Wallet, Users, BanknoteIcon, UserCircle } from 'lucide-react'

const ActionButton = ({ icon: Icon, label }) => (
    <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow transition-all duration-300 hover:shadow-md hover:bg-gray-50 cursor-pointer">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-blue-500" />
        </div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
)

function Buttons() {
    return (
        <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex justify-between items-center mb-6">
                <span className="text-lg text-gray-700">Invitation Code</span>
                <span className="font-mono text-lg font-bold bg-gray-100 px-4 py-2 rounded-lg">MYYVARGD</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <ActionButton icon={Wallet} label="Recharge" />
                <ActionButton icon={Users} label="My Team" />
                <ActionButton icon={BanknoteIcon} label="Withdrawal" />
                <ActionButton icon={UserCircle} label="Profile Details" />
            </div>
        </div>
    )
}

export default Buttons