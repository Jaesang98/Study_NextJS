"use client";
import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, 수량변경] = useState([0, 0, 0]);

  return (
    <div>
      <h2>Products</h2>
      {상품.map((item, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img"></img>
            <h4>{item} $40</h4>
            <span> {수량[idx]} </span>
            <button
              onClick={() => {
                let copy = [...수량];
                copy[idx]++;
                수량변경(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
