import { API_URL } from "../../config";

async function verifyOtp(email, newPassword, otp) {
  const response = await fetch(`${API_URL}/users/verifyOtp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email, newPassword, otp
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to send otp");
  }
  return data;
}

export default verifyOtp;
