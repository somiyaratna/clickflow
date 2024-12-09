import { API_URL } from "../../config";

async function userSignup(
  fullName,
  username,
  email,
  phoneNo,
  withdrawalPassword,
  loginPassword,
  inviteCode,
  termConditionAccepted
) {
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      fullName,
      username,
      email,
      phoneNo,
      withdrawalPassword,
      loginPassword,
      inviteCode,
      termConditionAccepted
    ),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to signup");
  }
  const data = await response.json();
  return data;
}

export default userSignup;
