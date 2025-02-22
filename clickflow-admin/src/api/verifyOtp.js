import { API_URL } from "../../config";

async function verifyOtp(username, otp) {
  const response = await fetch(`${API_URL}/admin/verifyOtp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({username, otp}),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to edit user");
  }
  return data;
}

export default verifyOtp;