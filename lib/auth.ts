import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub || "";
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});

export async function landingAuthCheck() {
  const session = await auth();
  console.log(session);
  if (session?.user?.id) {
    const anyUser = await prisma.user.findFirst({});
    if (anyUser) return "/profile-selector";
    return "/get-started";
  } else return "ok";
}

export async function requireAuth() {
  const session = await auth();
  if (session?.user?.id) {
    return true;
  } else return false;
}
