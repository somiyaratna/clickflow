import { API_URL } from "../../config";

async function sendOtp(username, password) {
  const response = await fetch(`${API_URL}/admin/sendOtp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({username, password}),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to edit user");
  }
  return data;
}

export default sendOtp;