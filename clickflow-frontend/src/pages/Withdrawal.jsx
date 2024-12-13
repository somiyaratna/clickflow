import Input from "../components/ui/Input";

const Withdrawal = () => {
  return (
    <div className="flex-1 justify-center items-center flex flex-col gap-8 h-full">
      <h1 className="text-primary800 text-3xl font-bold">
        Binding Wallet Address
      </h1>
      <div
        style={{
          background: "#fff",
          color: "#333",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        }}
        className="p-8 rounded-xl max-w-72 md:max-w-96 w-full text-center"
      >
        <div className="relative">
          <Input
            type={"text"}
            label={"Wallet Address"}
            placeholder={"Enter Wallet Address"}
          />
          <Input type={"option"} placeholder={"Network:"} />
          <p className="absolute right-4 bottom-2">TRC 20</p>
        </div>
      </div>
      <ul className="list-disc px-8 mt-10">
        <li className="text-red-600 text-sm">
          We only support USDT TRC20 network, so make sure to double check your
          TRC20 USDT address.
        </li>
        <li className="text-red-600 text-sm">
          If you made an incorrect withdrawal, we are not responsible for making
          changes. Please contact customer service for assistance.
        </li>
      </ul>
    </div>
  );
};

export default Withdrawal;
