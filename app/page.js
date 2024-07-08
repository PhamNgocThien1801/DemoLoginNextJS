import "./style.css"
import Link from 'next/link'

export default function Home() {  return (
    <div className="container">
      <p>Dashboard</p>
      <button><Link href="/login">Login</Link></button>
      <button><Link href="/register">Register</Link></button>
    </div>
  );
}
