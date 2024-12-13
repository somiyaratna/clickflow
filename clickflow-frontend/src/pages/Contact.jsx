import { MessagesSquare } from "lucide-react";
import Button from "../components/ui/Button";

const Contact = () => {
  return (
    <div className="flex-1 justify-center items-center flex flex-col gap-8 h-full">
      <MessagesSquare size={64} className="text-primary800 " />
      <h1 className="font-bold text-primary800 text-6xl">
        Contact us on WhatsApp
      </h1>
      <p className="text-primary800 text-lg">
        Customer service time: 09:00-21:00.
      </p>
      <Button>
        <a
          href="https://wa.me/17863841671"
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
