'use client'

import Link from "next/link"
import {useAuth} from "@/context/AuthContext"

export default function Navbar() {

  // const [user, setUser] = useState<User | null>(null)

  // useEffect(() => {
  //   const userLocal = localStorage.getItem('User')

  //   if (userLocal) {
  //     setUser(JSON.parse(userLocal))
  //   }
  // }, [])

  // console.log(user?.role);


  const user = localStorage.getItem('User')



  return (
    <nav className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <span className="font-mono text-green-400">
            &gt;_
          </span>

          <span className="text-xl font-bold text-zinc-100">
            DevStore
          </span>
        </Link>


        {/* LINKS */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-green-400"
          >
            Home
          </Link>

          <Link
            href="/productos"
            className="text-sm text-zinc-400 transition hover:text-green-400"
          >
            Products
          </Link>

          <Link
            href="/favoritos"
            className="text-sm text-zinc-400 transition hover:text-green-400"
          >
            Favorites
          </Link>

          <Link
            href="/carrito"
            className="text-sm text-zinc-400 transition hover:text-green-400"
          >
            Cart
          </Link>

        </div>


        {/* AUTH */}
        {!user ? <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-green-400"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg border border-green-400 px-4 py-2 text-sm font-medium text-green-400 transition hover:bg-green-400 hover:text-zinc-950"
          >
            Register
          </Link>

        </div>
          :
        <div className="flex items-center gap-3">

          <Link href='/' className="rounded-lg border border-red-400 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-400 hover:text-zinc-950"
            >Logout</Link>

        </div>}

      </div>
    </nav>
  )
}