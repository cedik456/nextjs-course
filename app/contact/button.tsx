"use client";

import React from "react";

interface ButtonProps {
  content: string;
}

export default function Button({ content }: ButtonProps) {
  return (
    <div>
      <button onClick={() => alert(content)}>Click me</button>
    </div>
  );
}
