import { MessagesSquare } from "lucide-react";
import Button from "../components/ui/Button";
import { useEffect, useState } from "react";
import fetchWhatsappNumber from "../api/fetchWhatsappNumber";

const Contact = () => {
  const[whatsappNumber, setWhatsappNumber] = useState('')
  
  const fetchNumber = async()=>{
    try{
      const number = await fetchWhatsappNumber();
      setWhatsappNumber(number.whatsappNumber);
    }catch(error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    fetchNumber()
  },[])

  return (
    <div className="flex-1 justify-center items-center flex flex-col gap-8 h-full">
      <MessagesSquare size={64} className="text-white " />
      <h1 className="font-bold text-white text-center text-4xl md:text-6xl">
        Contact us on WhatsApp
      </h1>
      <p className="text-white text-lg">Customer service time: 09:00-21:00.</p>
      <Button>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Redirect to WhatsApp
        </a>
      </Button>
    </div>
  );
};

export default Contact;
