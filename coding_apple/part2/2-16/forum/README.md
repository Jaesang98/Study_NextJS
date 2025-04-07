## 💡 part2-16 회원기능 만들기 : OAuth + session방식 사용하기

### DB adapter

- npm install @next-auth/mongodb-adapter

```javascript
// nextauth.js
import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23limmnbY0Aqd6DvNU",
      clientSecret: "8c39afc500e87b2191bf5197c3b28b1ba895a7ec",
    }),
  ],
  secret: "0630",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);


// api.js
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);

  if (session) {
    요청.body.author = session.user.email;
  }

  if (요청.method == "POST") {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(요청.body);
    return 응답.status(200).redirect("/list");
  }
}

```

### 정보

- account, session, users등이 있음
- users는 가입된 유저정보
- account는 유저들의 계정을 보관
