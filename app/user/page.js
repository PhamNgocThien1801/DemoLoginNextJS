'use client'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
export default function Register() {

    const {data:session} = useSession();
    return (
        <div className="container">
            <p>WellCome<span>{session?.user?.name}</span></p>
            <p>Email: <span>{session?.user?.email}</span></p>
            <button onClick={()=> signOut()}>Logout</button>
        </div>
    );
}
