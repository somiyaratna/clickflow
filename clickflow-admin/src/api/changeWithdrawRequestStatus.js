import { API_URL } from "../../config";

async function changeWithdrawRequestStatus(id, status) {
  const response = await fetch(`${API_URL}/withdraw/changeWithdrawRequestStatus/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        status
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to login");
  }
  return data;
}

export default changeWithdrawRequestStatus;