import React from 'react'
import { useNavigate } from 'react-router-dom';

function Starting() {
    const navigate = useNavigate();
    const categories = [
        { title: "Home Appliances", image: "https://clickflow.life/static/img/u1.png?height=200&width=300", alt: "TV display" },
        { title: "Apple", image: "https://clickflow.life/static/img/u2.png?height=200&width=300", alt: "Smartphones" },
        { title: "Daily Necessities", image: "https://clickflow.life/static/img/u3.png?height=200&width=300", alt: "Cleaning supplies" },
        { title: "Luxury", image: "https://clickflow.life/static/img/u4.png?height=200&width=300", alt: "Luxury watch" },
        { title: "Cosmetic", image: "https://clickflow.life/static/img/u5.png?height=200&width=300", alt: "Beauty product" },
        { title: "Furniture", image: "https://clickflow.life/static/img/u6.png?height=200&width=300", alt: "Accent chair" }
    ];
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-xl font-semibold">Boost</h1>
                    <button variant="ghost" className="text-sm text-blue-600 font-semibold" onClick={()=>{navigate('/records')}}>History →</button>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-video relative mb-2">
                                <img
                                    src={category.image}
                                    alt={category.alt}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <h2 className="text-center text-sm text-blue-600 py-2">{category.title}</h2>
                        </div>
                    ))}
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg mb-6">
                    Starting
                </button>

                <div className="text-center text-sm text-gray-500 mb-6">
                    (43/45)
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm">Daily Commission</span>
                        <span className="text-sm font-medium">USDT 0.0</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm">Account Balance</span>
                        <span className="text-sm font-medium">USDT 61526.36</span>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-sm font-medium mb-2">Important Notes</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Don't leave tasks pending it may result in low credit score!</li>
                        <li>• Complete pending task by going to records!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Starting