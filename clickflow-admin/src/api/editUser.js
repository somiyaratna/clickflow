import { API_URL } from "../../config";

async function editUser(userDetail, userId) {
  const response = await fetch(`${API_URL}/users/edit/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetail),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to edit user");
  }
  return data;
}

export default editUser;