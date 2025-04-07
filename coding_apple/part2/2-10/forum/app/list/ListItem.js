"use client";
import Link from "next/link";

export default async function ListItem({ result }) {
  return (
    <div className="list-bg">
      {result.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <h4>{item.title}</h4>
            <Link href={`/detail/${item._id}`}>상세</Link>
            <br></br>
            <Link href={`/edit/${item._id}`}>수정</Link>
            <span
              onClick={() => {
                fetch("/api/post/delete", {
                  method: "POST",
                  body: "안녕",
                }).then(() => {
                  console.log("완료");
                });
              }}
            >
              삭제
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
