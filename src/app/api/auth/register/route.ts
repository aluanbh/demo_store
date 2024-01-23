import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { email, password, confirmPassword, name } = await request.json();
        //validaate email and password
        if (!email) {
            return new Response("Please provide an email", {
                status: 400, statusText: "Por favor, digite um e-mail"
            });
        }
        if (password !== confirmPassword) {
            return new Response("Passwords do not match", {
                status: 400, statusText: "Senhas não conferem"
            });
        }
        if (password.length < 6) {
            return new Response("Password must be at least 6 characters", {
                status: 400, statusText: "A senha deve ter pelo menos 6 caracteres"
            });
        }
        if (!name) {
            return new Response("Please provide a name", {
                status: 400, statusText: "Por favor, digite um nome"
            });
        }

        // register user
        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });

        return NextResponse.json({ message: "success" });

    } catch (e: any) {
        if (e.code === 'P2002' && e.meta.target.includes('email')) {
            return new Response("Email already exists", { status: 400, statusText: "E-mail existente, tente com outro!" });
        }
        return new Response("An error occurred", { status: 500, statusText: "Ocorreu um erro" });
    }
}