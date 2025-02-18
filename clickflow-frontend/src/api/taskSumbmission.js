import { API_URL } from "../../config";

async function taskSubmission(userId, product_title, product_price, product_image, product_category, product_description, commission) {
  const response = await fetch(`${API_URL}/dailyTask/taskSubmission`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_title,
      product_price,
      product_image,
      product_category,
      product_description,
      commission,
      userId
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData || "Failed to login");
  }
  return data;
}

export default taskSubmission;
