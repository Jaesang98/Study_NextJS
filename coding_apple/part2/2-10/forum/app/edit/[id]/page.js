import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.id),
  });

  return (
    <div>
      <h4>글수정</h4>
      <form action="/api/post/edit" method="POST">
        <input
          name="title"
          placeholder="글제목"
          defaultValue={result.title}
        ></input>
        <input
          name="content"
          placeholder="글내용"
          defaultValue={result.content}
        ></input>
        <input
          type="hidden"
          name="id"
          placeholder="글내용"
          defaultValue={result._id.toString()}
        ></input>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
