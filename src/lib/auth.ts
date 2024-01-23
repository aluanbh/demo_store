import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";
import { compare } from "bcrypt"; // Importe o bcrypt para hashing de senha

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
                    return { id: user?.id as string, email: user?.email };
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            console.log("session de session", session);
            console.log("token de session", token);
            console.log("user de session", user);
            session.user = { ...session.user, id: user.id } as {
                id: string;
                name: string;
                email: string;
            };
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log("token", token);
            console.log("user", user);
            console.log("account", account);
            console.log("profile", profile);
            console.log("isNewUser", isNewUser);
            if (user?.id) {
                token.id = user.id;
            }
            return token;
        },
    },
};