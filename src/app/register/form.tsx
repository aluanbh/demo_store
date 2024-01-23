'use client';
import { FormEvent } from "react";

export default function Form() {

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch(`/api/auth/register`, {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                name: formData.get('name'),
                password: formData.get('password'),
                confirmPassword: formData.get('confirmPassword'),
            }),
        });
        console.log({ response })
    }
    return (
        <div className="flex justify-center h-auto">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-1/3 h-full space-y-4">
                <h1 className="text-4xl font-bold">Register</h1>
                <div className="flex flex-col items-center w-full space-y-2">
                    <label className="text-xl font-semibold">Username</label>
                    <input name="name" className="w-full p-2 border border-gray-300 rounded-md text-black" />
                </div>
                <div className="flex flex-col items-center w-full space-y-2">
                    <label className="text-xl font-semibold">Email</label>
                    <input name="email" className="w-full p-2 border border-gray-300 rounded-md text-black" />
                </div>
                <div className="flex flex-col items-center w-full space-y-2">
                    <label className="text-xl font-semibold">Password</label>
                    <input name="password" className="w-full p-2 border border-gray-300 rounded-md text-black" type="password" />
                </div>
                <div className="flex flex-col items-center w-full space-y-2">
                    <label className="text-xl font-semibold">Confirm Password</label>
                    <input name="confirmPassword" className="w-full p-2 border border-gray-300 rounded-md text-black" type="password" />
                </div>
                <button type="submit" className="w-full p-2 text-xl font-semibold text-white bg-blue-500 rounded-md">Register</button>
            </form>
        </div>
    );
}