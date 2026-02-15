import { API_URL } from "../../config";

async function editTelegramUsername(id, telegramNumber) {
  const response = await fetch(`${API_URL}/telegram/editTelegramNumber/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({telegramNumber}),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to edit user");
  }
  return data;
}

export default editTelegramUsername;