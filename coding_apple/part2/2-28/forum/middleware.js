import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const session = await getToken({ req: request });

  if (request.nextUrl.pathname.startsWith("/write")) {
    const session = await getToken({ req: request });
    console.log("세션", session);
    if (session == null) {
      return NextResponse.redirect(new URL("/api/auth/signin", request.url));
    }
  }

  if (request.nextUrl.pathname === "/list") {
    console.log(request.headers.get());
    return NextResponse.next();
  }

  request.cookies.get("쿠키이름"); //출력
  request.cookies.has("쿠키이름"); //존재확인
  request.cookies.delete("쿠키이름"); //삭제

  const response = NextResponse.next();
  response.cookies.set({
    name: "mode",
    value: "dark",
    maxAge: 3600,
    httpOnly: true,
  });
  return response;
}
