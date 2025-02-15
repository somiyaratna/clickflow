import { API_URL } from "../../config";

async function editWhatsappNumber(id, whatsappNumber) {
  const response = await fetch(`${API_URL}/whatsapp/editWhatsappNumber/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({whatsappNumber}),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to edit user");
  }
  return data;
}

export default editWhatsappNumber;