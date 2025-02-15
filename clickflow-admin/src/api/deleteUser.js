import { API_URL } from "../../config";

async function deleteUser(userId) {
  const response = await fetch(`${API_URL}/users/delete/${userId}`, {
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

export default deleteUser;