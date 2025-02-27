import { API_URL } from "../../config";

async function fetchAllTransactions(userId) {
  const response = await fetch(`${API_URL}/transaction/alltransaction/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to login");
  }
  return data;
}

export default fetchAllTransactions;