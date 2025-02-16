import { API_URL } from "../../config";

async function deletePremiumTask(taskId) {
  const response = await fetch(`${API_URL}/premiumTask/deletePremiumTask/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to edit user");
  }
  return data;
}

export default deletePremiumTask;