import { MessagesSquare } from "lucide-react";
import Button from "../components/ui/Button";
import { useEffect, useState } from "react";
import fetchWhatsappNumber from "../api/fetchWhatsappNumber";

const Contact = () => {
  const [whatsappNumber, setWhatsappNumber] = useState('')

  const fetchNumber = async () => {
    try {
      const number = await fetchWhatsappNumber();
      setWhatsappNumber(number.whatsappNumber);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchNumber()
  }, [])

  return (
    <div className="bg-[#A4C8FF] h-full">
      <div className="flex-1 justify-center items-center flex flex-col gap-8 h-full pt-24 md:pt-0">
        <MessagesSquare size={64} className="text-white " />
        <h1 className="font-bold text-[#14213D] text-center text-4xl md:text-6xl">
          Contact us on WhatsApp
        </h1>
        <p className="text-[#14213D] text-lg">Customer service time: 09:00-21:00.</p>
        <div className="text-center ">
          <button className="inline-block bg-[#8A53F8] text-white px-[30px] py-[10px] rounded-[66px] hover:bg-blue-700 transition text-[22px] font-medium">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Redirect to WhatsApp
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
