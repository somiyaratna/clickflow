import React from 'react'
import Parallelogram from './Parallelogram'
import CountUpNumber from './CountUpNumber'
import { useInView } from 'react-intersection-observer'

function Count() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div className="w-full bg-[#a4c8ff] py-16 px-4" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-[#14213d] text-[28px] sm:text-5xl font-bold text-center mb-16 leading-tight">
                    Turn clicks into customers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <Parallelogram />
                        <h3 className="text-[#14213d] text-[55px] lg:text-6xl font-bold mb-2">
                            ${inView && <CountUpNumber target="$4.1" increment = {0.1} duration={20}/>}M+
                        </h3>
                        <p className="text-[#14213d] text-lg">Client Revenue Generated</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Parallelogram />
                        <h3 className="text-[#14213d] text-[55px] lg:text-6xl font-bold mb-2">
                            ${inView && <CountUpNumber target="175,000" increment = {1100} duration={1}/>}
                        </h3>
                        <p className="text-[#14213d] text-lg">Client Ad Spend</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Parallelogram />
                        <h3 className="text-[#14213d] text-[55px] lg:text-6xl font-bold mb-2">
                            {inView && <CountUpNumber target="500,000" increment = {4000} duration={6}/>}+
                        </h3>
                        <p className="text-[#14213d] text-lg">Ads Serviced Last 30d</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Count