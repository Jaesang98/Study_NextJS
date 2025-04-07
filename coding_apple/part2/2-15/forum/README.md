## 💡 part2-15 회원기능 만들기 : Auth.js 사용한 소셜로그인

### 깃허브 OAuth 세팅

- [깃헙 설정](https://github.com/settings/developers)

```javascript
// 설치
npm install next-auth


// 디렉토리
pages/api/auth/[...nextauth].js


// nextauth.js
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
};
export default NextAuth(authOptions);


// 로그인
"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      로그인
    </button>
  );
}

// 데이터
import { authOptions } from "@/pages/api/auth/[...nextauth]";

let session = await getServerSession(authOptions);
console.log(session);
```
