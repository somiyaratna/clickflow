import { useState } from "react";
import { CircleHelp, ChevronDown, ChevronUp, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { faqData } from "../../constants";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="border-b border-gray-400">
      <button
        className="w-full text-left py-4 px-2 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-100 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="px-2 pb-4">{answer}</p>
      </div>
    </li>
  );
};

const FAQs = () => {
  return (
    <div className="min-h-full flex-1 p-8 text-white bg-darkbg200">
      <div className="flex gap-4 items-center mb-8">
        <Link to={"/dashboard"}>
          <ChevronLeft size={40} />
        </Link>
        <CircleHelp size={40} className="text-white" />
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Frequently Asked Questions
        </h1>
      </div>

      <ol className="list-decimal bg-darkbg100 p-6 rounded-lg shadow-md">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </ol>
    </div>
  );
};

export default FAQs;
