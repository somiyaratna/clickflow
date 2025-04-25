import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
    "https://media.gettyimages.com/id/83987139/photo/close-up-of-a-girl-surrounded-by-stuffed-toys.jpg?s=612x612&w=0&k=20&c=Ti7gwyQkl_Tg5UUozrmnic58VrMu-I1UCHAxLxWQJek=",
    "https://media.gettyimages.com/id/1233389203/photo/t-shirts-are-on-display-at-top-manta-a-clothing-line-created-by-an-association-of-african.jpg?s=612x612&w=0&k=20&c=jjnLxcg69x2Gi-BlnsMPa6UyfwIMRnrcGon6j38b9F4=",
    "https://media.gettyimages.com/id/1335669510/vector/vector-isometric-devices-set.jpg?s=612x612&w=0&k=20&c=DBjsHSWGxGDkKrWTFus2CvvCDUHhksziuj8cN4FZKwo=",
    "https://media.gettyimages.com/id/1057253610/photo/small-business-owener.jpg?s=612x612&w=0&k=20&c=kzwpx0f6FjonycJc5brB2jo5VxKRYWM2JjTBzjaMad8=",
    "https://media.gettyimages.com/id/161843786/photo/golf-club-and-bag-with-fairway-background-xxlarge.jpg?s=612x612&w=0&k=20&c=nJKGznHnwunUtiIuzahnxX0MBR8i4qOOTt30zB_q12I=",
    "https://media.gettyimages.com/id/641229841/photo/mens-daily-supplies-shot-knolling-style.jpg?s=612x612&w=0&k=20&c=H4q3dE_kp57g17f7EdcqLt0uM71Ju6FYhODDuralRlk=",
    "https://media.gettyimages.com/id/650158709/photo/businessman-holding-a-circle-containing-the-symbol-rocket.jpg?s=612x612&w=0&k=20&c=vZ5_uSfVjhBkvenI3nOjPvGAbtFWgzgjikMHnTQdOyI=",
    "https://media.gettyimages.com/id/1466445474/photo/woman-taking-a-picture-of-a-pink-t-shirt-for-secondhand-sale.jpg?s=612x612&w=0&k=20&c=RgKR-fQrotZ_MBAY4YzCa4Rtvku4VU5JawYdeg6SNok=",
    "https://media.gettyimages.com/id/1294890431/photo/fresh-drink-an-orange-juice-hat-and-glasses-on-the-floor-in-front-of-pool-in-background-in.jpg?s=612x612&w=0&k=20&c=90OMMIU8QM7zsyeB0JBSkjejl52x5fNGQZpDG1o6hHA=",
];
const ExclusiveGrid = ({user, commission, isModalOpen, setIsModalOpen}) => {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(images.slice(0, 9));

    useEffect(() => {
        const interval = setInterval(() => {
            const newStart = (startIndex + 1) % images.length;
            const rotated = [];
            for (let i = 0; i < 9; i++) {
                rotated.push(images[(newStart + i) % images.length]);
            }
            setVisibleImages(rotated);
            setStartIndex(newStart);
        }, 1000);

        return () => clearInterval(interval);
    }, [startIndex]);

    return (
        <div className="pt-4">
            <div className="bg-gray-50 rounded-2xl max-w-7xl mx-auto p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                    <p className="text-xs text-black">Exclusive channel for exclusive members</p>
                    <p className="text-sm text-black">
                        Commission Rate: <span className="text-primary text-blue-900">{commission}%</span>
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:hidden">
                    
                    {visibleImages.slice(0, 2).map((src, idx) => (
                        <img
                            key={`mobile-top-${idx}`}
                            src={src}
                            alt={`Mobile Top ${idx}`}
                            className="rounded-xl object-cover w-full h-28"
                        />
                    ))}

                    <div className="col-span-2">
                        <div onClick={()=> setIsModalOpen(true)} className="bg-[#925FFF] text-white rounded-xl w-full h-16 flex justify-center items-center text-lg font-medium cursor-pointer">
                            Start
                        </div>
                    </div>

                    {/* Bottom 2 images */}
                    {visibleImages.slice(2, 4).map((src, idx) => (
                        <img
                            key={`mobile-bottom-${idx}`}
                            src={src}
                            alt={`Mobile Bottom ${idx}`}
                            className="rounded-xl object-cover w-full h-28"
                        />
                    ))}
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:grid sm:grid-cols-3 gap-2">
                    {/* Top row - 3 images */}
                    {visibleImages.slice(0, 3).map((src, idx) => (
                        <img
                            key={`desktop-top-${idx}`}
                            src={src}
                            alt={`Desktop Top ${idx}`}
                            className="rounded-xl object-cover w-full h-32"
                        />
                    ))}

                    {/* Middle row - 3 images + Start Button (centered on 4th col using grid template) */}
                    <div className="col-span-3 grid grid-cols-3 gap-2">
                        {/* Left Image */}
                        <img
                            src={visibleImages[3]}
                            alt="Desktop Middle Left"
                            className="rounded-xl object-cover w-full h-32"
                        />

                        
                        <div className="flex justify-center items-center">
                            <div onClick={()=>setIsModalOpen(true)} className="bg-[#925FFF] text-white rounded-xl w-full h-32 flex justify-center items-center text-lg font-medium cursor-pointer">
                                Start
                            </div>
                        </div>

                        
                        <img
                            src={visibleImages[4]}
                            alt="Desktop Middle Right"
                            className="rounded-xl object-cover w-full h-32"
                        />
                    </div>

                    {/* Bottom row - 3 images */}
                    {visibleImages.slice(6, 9).map((src, idx) => (
                        <img
                            key={`desktop-bottom-${idx}`}
                            src={src}
                            alt={`Desktop Bottom ${idx}`}
                            className="rounded-xl object-cover w-full h-32"
                        />
                    ))}
                </div>

                {/* Footer Text */}
                <p className="text-xs text-black mt-4">Exclusive channel for exclusive members</p>
            </div>
        </div>
    );
};

export default ExclusiveGrid;
