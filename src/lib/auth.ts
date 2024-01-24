import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {

    adapter: PrismaAdapter(prismaClient) as any,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "E-mail", type: "text", placeholder: "teste@gmail.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as { email: string, password: string };
                const response = await prismaClient.user.findUnique({
                    where: { email },
                });
                const user = response
                const passwordCorrect = await compare(password, user?.password as string);


                if (passwordCorrect) {
                    return user;
                }

                return null;
            },

        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {

        async session({ session, token, user }) {
            return session;
        },


    },
    pages: {
        // signIn: '/auth/signin',
        // signOut: '/auth/signout',
        error: '/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
};