## 💡 part2-11 삭제기능 만들기 2 (Ajax 추가내용과 에러처리)

### 🔹배운거

```javascript
// list.js
onClick={() => {
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
      //성공시 실행할코드
    })
    .catch((error) => {
      //인터넷문제 등으로 실패시 실행할코드
      console.log(error);
    });
}}


// delete.js
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "DELETE") {
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(요청.body) });
    return 응답.status(200).json("삭제됨");
  }
}

```
