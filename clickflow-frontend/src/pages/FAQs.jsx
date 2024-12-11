import { useState } from "react";
import { CircleHelp, ChevronDown, ChevronUp } from "lucide-react";

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
  const faqData = [
    {
      question: "What is Organic Traffic and how is it digital?",
      answer:
        "Organic traffic is the lifeblood of any successful online business. It's the traffic that comes from search engines such as Google and Bing, and it's the traffic that's most likely to convert into paying customers.",
    },
    {
      question: "Why we do transaction via USDT?",
      answer:
        "That's due to our merchants and users being located all around the world. If we were to use a single exchange rate, certain merchants or users might face difficulties in making payments from other countries. The most efficient solution to this issue is the use of USDT, which allows merchants to credit commissions into the user's accounts more rapidly.",
    },
    {
      question: "What is SEO and how does it work?",
      answer:
        "Search Engine Optimization (SEO) is the process of optimizing websites and content to improve organic visibility in search engine results pages (SERPs). SEO involves optimizing content, website structure, and other technical components to ensure that search engines can easily understand and index a website. The goal of SEO is to increase organic traffic to a website by improving its visibility in search engine results pages.",
    },
    {
      question: "What are the benefits of SEO?",
      answer:
        "SEO can help to drive more organic traffic to your website, increase brand visibility and awareness, and improve your website’s credibility and reputation. It can also lead to increased website conversions and an increase in overall website performance.",
    },
    {
      question: "How can I optimize my website for SEO?",
      answer:
        "Optimizing your website for SEO involves several key steps, such as creating quality content, optimizing page titles and meta descriptions, optimizing images, and setting up a sitemap. Additionally, it's important to ensure that your website is correctly structured and that it is mobile-friendly. Other important steps include optimizing for local SEO, setting up rich snippets, and utilizing other SEO tools and strategies.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="min-h-full flex-1 p-8 bg-gray-100">
      <div className="flex gap-4 items-center mb-8">
        <CircleHelp size={40} className="text-primary800" />
        <h1 className="text-2xl md:text-4xl font-bold text-primary800">
          Frequently Asked Questions
        </h1>
      </div>

      <ol className="list-decimal bg-white p-6 rounded-lg shadow-md">
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
