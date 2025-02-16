import { API_URL } from "../../config";

async function createPremiumTask(task) {
  const response = await fetch(`${API_URL}/premiumTask/createPremiumTask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to edit user");
  }
  return data;
}

export default createPremiumTask;