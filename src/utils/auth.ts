// libraries
import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user}) {
      if (user) {
        token.user = user.user;
        token.token = user.token;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.token = token.token;

      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { type: 'text' },
        password: { type: 'password' },
      },
      // async authorize(credentials, req) {
      async authorize() {
        return {
          user: {
            username: 'soheil',
          },
          token: '123',
        };
      },
    }),
  ],
};

export const getSession = () => getServerSession(authOptions);
