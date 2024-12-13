import { useState } from "react";
import Input from "../components/ui/Input";
import { Copy } from "lucide-react";
import Button from "../components/ui/Button";
import { amounts } from "../../constants";

const Recharge = () => {
  const [paymentID, setpaymentID] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [amount, setAmount] = useState("");
  const [activeTab, setActiveTab] = useState(null);

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  const handleTabClick = (value) => {
    setAmount(value);
    setActiveTab(value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full flex-grow gap-8">
      <h1 className="text-4xl text-primary800 font-bold">Recharge</h1>
      <div
        style={{
          background: "#fff",
          color: "#333",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        }}
        className="p-8 rounded-xl max-w-fit md:max-w-fit w-full text-center"
      >
        <Input
          type={"number"}
          label={"Amount"}
          placeholder={"Enter amount"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p className="text-start -mb-3 font-semibold">
          Or, select an amount from below:
        </p>
        <div className="flex justify-center gap-2 my-4">
          {amounts.map((value) => (
            <button
              key={value}
              className={`px-4 py-2 rounded-lg border ${
                activeTab === value ? "bg-primary600 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabClick(value)}
            >
              ${value}
            </button>
          ))}
        </div>
        <div className="relative">
          <Input
            type={"text"}
            label={"Pay to:"}
            value={paymentID}
            onChange={(e) => setpaymentID(e.target.value)}
          />
          {isCopied && (
            <span className="absolute right-2 top-0 text-primary800">
              Copied!
            </span>
          )}
          <Copy
            className="absolute right-2 top-9 text-primary800 cursor-pointer"
            onClick={() => copyToClipboard(paymentID)}
          />
        </div>
        <Input
          type={"text"}
          label={"Transaction ID"}
          placeholder={"Enter Transaction ID"}
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
        />
        <Input type={"file"} label={"Upload Deposit Slip/Picture:"} />
        <div className="mt-8">
          <p className="text-red-600 text-sm">Must Use USDT Trc 20 network. </p>
          <p className="text-primary800 text-sm">
            Make sure to fill in all the required information.{" "}
          </p>
          <p className="text-primary800 text-sm">
            Verification may take up to 2 Hours. Contact Customer service if got
            delayed.{" "}
          </p>
        </div>
        <ul className="list-disc text-sm list-inside my-10 border-t-2 border-gray-600 pt-4">
          <li>Please upload a clear image of your deposit slip.</li>
          <li>Your transaction ID is required for verification.</li>
          <li>
            Once completed, click the Submit button to process your payment.
          </li>
        </ul>
        <Button type={"submit"} width={"full"}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Recharge;