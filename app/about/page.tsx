"use client";

export default function About() {
  console.log("hey is this a server");

  return (
    <div>
      <p>About page</p>
      <button onClick={() => alert("hello")}>Click me</button>
    </div>
  );
}
