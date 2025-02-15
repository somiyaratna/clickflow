import { API_URL } from "../../config";

async function sendOtp(email) {
  const response = await fetch(`${API_URL}/users/sendOtp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to send otp");
  }
  return data;
}

export default sendOtp;
