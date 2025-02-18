import { API_URL } from "../../config";

async function withdrawRequest(userId, fullName, wallet_address, amount, withdrawalPassword, network) {
  const response = await fetch(`${API_URL}/withdraw/createWithdrawal`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      fullName,
      wallet_address,
      amount,
      withdrawalPassword,
      network,
    }),
  });


  const data = await response.json();

  if (!response.ok) {
    console.log("Error:", data);
    throw new Error(data.message || "Withdraw request failed");
  }

  return data;
}

export default withdrawRequest;