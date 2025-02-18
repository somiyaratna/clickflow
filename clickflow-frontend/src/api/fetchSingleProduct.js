import { API_URL } from "../../config";

async function fetchSingleProduct(deposit) {
    console.log("first", deposit)
  const response = await fetch(`${API_URL}/product/singleProducts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        deposit
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to login");
  }
  return data;
}

export default fetchSingleProduct;
