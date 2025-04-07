"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div className="list-bg">
      {result.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <h4>{item.title}</h4>
            <Link href={`/detail/${item._id}`}>상세</Link>
            <br></br>
            <Link href={`/edit/${item._id}`}>수정</Link>
            <br></br>
            <span
              onClick={(e) => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: item._id,
                })
                  .then((r) => {
                    if (r.status == 200) {
                      return r.json();
                    } else {
                      //서버가 에러코드전송시 실행할코드
                    }
                  })
                  .then((result) => {
                    e.target.parentElement.style.opacity = 0;
                  })
                  .catch((error) => {
                    //인터넷문제 등으로 실패시 실행할코드
                    console.log(error);
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
