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
