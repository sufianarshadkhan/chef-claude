// netlify/functions/huggingface.js
const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const response = await fetch("https://api-inference.huggingface.co/models/your-model-id", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: event.body,
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
