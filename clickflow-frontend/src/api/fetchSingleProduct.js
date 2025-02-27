import { API_URL } from "../../config";

async function fetchSingleProduct( userId, deposit, level) {
  const response = await fetch(`${API_URL}/product/singleProducts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        userId,
        deposit,
        level
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data || "Failed to login");
  }
  return data;
}

export default fetchSingleProduct;
