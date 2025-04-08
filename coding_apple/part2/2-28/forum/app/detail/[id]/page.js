import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { notFound } from "next/navigation";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.id),
  });

  if (result == null) {
    return notFound();
  }

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment _id={result._id.toString()}></Comment>
    </div>
  );
}
