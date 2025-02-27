import { API_URL } from "../../config";

async function restTask( userId) {
  const response = await fetch(`${API_URL}/dailyTask/resetTask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({userId}),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to reset ask");
  }
  return data;
}
export default restTask;
