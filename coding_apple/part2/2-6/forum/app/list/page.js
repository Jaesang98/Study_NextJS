import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <h4>{item.title}</h4>
            <Link href={`/detail/${item._id}`}>상세</Link>
            <DetailLink></DetailLink>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
