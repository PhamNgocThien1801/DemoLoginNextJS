'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email ||!password) {
            setError("Empty Value");
            return
        }

        try {
            const resUserExist = await fetch("api/userExists", {
                method:"POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({email}),
            });

            const {user} = await resUserExist.json();

            if(user) {
                setError("User alredy created");
                return;
            }

            const res = await fetch('api/register', {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    name, email, password
                }),
            });

            if(res.ok) {
                const form = e.target;
                form.reset();
                router.push("/login")
            } else {
                console.log("register faild")
            }
        } catch (error) {
            console.log("register faild: ", error);
        }
    }        
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Name"  />
            <input onChange={e => setEmail(e.target.value)} type="text" name="email" placeholder="Email"  />
            <input onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Password"  />
            {error && (
                <p>{error}</p>
            )}
            <button type="submit">Register</button>
        </form>
    );
}
