"use client";

import { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState<string[]>([]);
  return (
    <div>
      <input type="text" placeholder="Type here" className="input" value={text} onChange={(e) => setText(e.target.value)} />
      <button className="btn" onClick={() => {
        setPosts([...posts, text]);
        setText("");
      }}>Submit</button>
      <ul className="list-disc">
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
}