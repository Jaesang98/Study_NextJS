## 💡 part2-2 Next.js에서 MongoDB 사용하기

### 🔹 MongoDB설치

- npm install mongodb

```javascript
// database.js
import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://admin:fkaus123@cluster0.zrch4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };

// page.js
import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");

  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div>
      <div>a</div>
    </div>
  );
}
```
