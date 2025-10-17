"use client";

import { useState } from "react";

async function makePostRequest() {
  const res = await fetch("/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Pedro" }),
  });

  const data = await res.json();

  return data;
}

export default function Post() {
  const [message, setMessage] = useState("");

  const onClick = async () => {
    const data = await makePostRequest();
    setMessage(data.message);
  };

  return (
    <div>
      <button onClick={onClick}>Click to show</button>
      <p>Hi! {message} </p>
    </div>
  );
}
