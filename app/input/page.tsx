"use client";

import { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState<string[]>([]);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <a className="btn btn-ghost text-xl">Gighub Test</a>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Random Stuff</h2>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Add Something Random</legend>
            <div className="join">
            <input type="text" placeholder="Type here" className="input join-item" value={text} onChange={(e) => setText(e.target.value)} />
            <button className="btn btn-primary join-item" onClick={() => {
              if (text.length) setPosts([...posts, text]);
              setText("");
            }}>Submit</button>
            </div>
          </fieldset>
        </div>
      </div>
      <ul className="list bg-base-100 rounded-box shadow-md flex flex-col">
        {posts.map((post, index) => (
          <li key={index} className="list-row">
            <div className="text-xs uppercase font-semibold opacity-60">
              {post}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}