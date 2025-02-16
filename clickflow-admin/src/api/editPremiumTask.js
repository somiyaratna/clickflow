import { API_URL } from "../../config";

async function editPremiumTask(taskDetails, taskId) {
  const response = await fetch(`${API_URL}/premiumTask/editPremiumTask/${taskId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskDetails),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to edit user");
  }
  return data;
}

export default editPremiumTask;