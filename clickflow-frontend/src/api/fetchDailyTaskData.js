import { API_URL } from "../../config";

async function fetchDailyTaskData(userId) {
  const response = await fetch(`${API_URL}/dailyTask/fetchDailyTaskData/${userId}`, {
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

export default fetchDailyTaskData;