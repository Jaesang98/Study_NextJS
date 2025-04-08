"use client";

import { useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState();
  return (
    <div>
      <div>댓글목록</div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/URL", { method: "POST", body: comment });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
