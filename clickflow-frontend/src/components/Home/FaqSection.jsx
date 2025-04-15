import React, { useState } from 'react';

const faqs = [
    {
        question: 'What does Clickflow specialize in?',
        answer:
            'Clickflow is a full-stack marketing agency with a primary specialization in crafting highly effective sales funnels. Our expertise encompasses the strategic design and development of websites, the creation of compelling ad creatives, and the meticulous management of digital advertising campaigns. We excel at seamlessly integrating these components to drive optimal results and help businesses achieve their marketing and sales objectives.',
    },
    {
        question: 'How can Clickflow help my service business?',
        answer: 'Clickflow can significantly enhance your service business by leveraging our expertise in several crucial areas. Our tailored solutions are designed to optimize sales funnels, guiding potential customers seamlessly from initial contact to final purchase. We revamp websites to improve user experience, speed, and overall functionality, ultimately boosting customer retention and satisfaction. Our team crafts compelling ad creatives that resonate with your target audience, increasing click-through rates and driving more qualified traffic to your service-based site. We excel in managing social media advertising campaigns using data-driven strategies that optimize ad spend and maximize ROI. Additionally, we provide actionable insights through analytics and testing to help you make informed decisions that continually improve sales performance. As your business grows, Clickflow adapts its strategies to scale your online presence and revenue while maintaining efficiency and profitability. In essence, Clickflow empowers your service business to thrive in the digital landscape, driving increased sales and sustained growth.',
    },
    {
        question: 'What sets Clickflow apart from other marketing agencies?',
        answer: 'Clickflow stands out in the competitive marketing landscape for several key reasons. We prioritize exceptional communication, ensuring clear and transparent interactions with our clients. Our team listens attentively to your needs, objectives, and feedback, fostering a collaborative partnership that delivers results aligned with your vision. We also place meticulous attention to detail at the heart of everything we do, from website design to ad creatives, ensuring no aspect is overlooked in our pursuit of perfection. Our diverse team brings a wide range of expertise across various marketing disciplines, enabling us to create integrated solutions tailored to your unique challenges. Clickflow’s data-driven approach harnesses the power of analytics to inform strategies, leading to data-backed decisions that improve performance and ROI. Additionally, we are committed to continuous improvement, staying ahead of industry trends and refining our methods to provide the most effective marketing solutions. In summary, Clickflow’s exceptional communication, attention to detail, diverse skill set, and data-driven approach make us a standout agency dedicated to delivering outstanding results for our clients.',
    },
    {
        question: 'What is the expected timeline to see results?',
        answer: 'The expected timeline to witness noticeable results can vary significantly for each business, influenced by factors such as pre-existing brand awareness, product appeal, and the nature of the business itself. Typically, we begin to observe tangible outcomes approximately three months into our partnership.This initial period allows us to thoroughly test your target audience and leverage our expertise to fine-tune our strategies for optimal effectiveness.',
    },
    {
        question: 'Does Clickflow work with businesses of all sizes, regardless of platform or budget?',
        answer: 'Absolutely! At Clickflow, we’re platform-agnostic and budget-flexible. Whether you’re launching a startup with limited resources, aiming to get that crucial initial return, or a large corporation seeking to maximize profits, our adaptable strategies are here to support you. We’re passionate about helping startups thrive and assisting established enterprises in achieving even greater financial success. No matter your platform or budget, Clickflow is your partner for navigating the digital landscape and making the most of your online presence.',
    },
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(0); // first one is open

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="bg-[#8A53F8] text-white py-20 flex justify-center px-4">
            <div className="max-w-3xl w-full">
                <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold mb-4">
                    You've got questions, we've got answers.
                </h2>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white rounded-sm overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left px-4 py-3 focus:outline-none"
                            >
                                <span>{`${index + 1}. ${faq.question}`}</span>
                                <span className="text-2xl leading-none">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            {activeIndex === index && faq.answer && (
                                <div className="px-4 pb-4 text-sm leading-relaxed border-t border-white">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
