"use client"

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn('credentials', {
                email, password, redirect: false,
            });
            if (res.error) {
                setError("invalid information");
                return;
            }
            router.replace('user')
        } catch (error) {
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e => setEmail(e.target.value)} type="text" name="email" placeholder="Email"  />
            <input onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Password"  />
            {error && (
                <p>{error}</p>
            )}
            <button type="submit">Login</button>
        </form>

    );
}
