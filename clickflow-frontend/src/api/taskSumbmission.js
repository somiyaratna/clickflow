import { API_URL } from "../../config";

async function taskSubmission(userId, product_title, product_price, product_image, product_category, product_description, commission, token) {
  const response = await fetch(`${API_URL}/dailyTask/taskSubmission`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
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
  // console.log(response)
  const data = await response.json();
  // if (!response.ok) {
  //   // const errorData = await response.json();
  //   throw new Error(data || "Failed to submit task");
  // }
  return data;
}

export default taskSubmission;
