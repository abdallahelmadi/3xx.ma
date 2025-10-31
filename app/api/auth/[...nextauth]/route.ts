import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter"

const handler = NextAuth({ 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      version: "2.0"
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: "2.0"
    })
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async session({ session }) {
      // called when user already have active session
      return session
    },
    async signIn({ user, account, profile }) {
      // called when no session active

      /* insert into database */
      // console.log("HELLO:::::::::::::: " + user.id)
      // console.log("HELLO:::::::::::::: " + user.email)
      // console.log("HELLO:::::::::::::: " + user.image)
      // console.log("HELLO:::::::::::::: " + user.name) // full name
      // console.log("HELLO:::::::::::::: " + account?.provider)

      return true
    }
  },
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
    verifyRequest: "/",
    newUser: "/"
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60
  },
  jwt: {
    maxAge: 7 * 24 * 60 * 60
  }
})

export { handler as GET, handler as POST }