import { API_URL } from "../../config";

async function fetchAllWithdrawRequests() {
  const response = await fetch(`${API_URL}/withdraw/fetchAllWithdrawRequests`, {
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

export default fetchAllWithdrawRequests;