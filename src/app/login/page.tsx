'use client'

import { get } from "@/services/api"
import type { User } from "@/interfaces/interfaces"
import { useState, useEffect } from "react"
import { redirect } from "next/navigation"

export default function LoginPage() {
  const [users, setUsers] = useState<User[]>([])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function getUsers() {
    return get<User[]>('/users')
  }

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data)
    })
  }, [])

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    login(email, password)
  }


  function login(email: string, password: string) {
    const login = users.find((user) => email === user.email && password === user.password)

    if (login) {
      localStorage.setItem('User', JSON.stringify(login))
      redirect('/')
        

    } else {
      alert('Credentials incorrects!')
    }
  }
  

  return (
    <main className="min-h-[calc(100vh-73px)] bg-zinc-950 px-6 py-16 text-zinc-100">

      <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden lg:block">

          <p className="font-mono text-sm text-green-400">
            $ devstore login
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Welcome back,
            <span className="block text-green-400">
              developer.
            </span>
          </h1>

          <p className="mt-6 max-w-md leading-7 text-zinc-400">
            Access your DevStore account and continue building
            your perfect development setup.
          </p>

          {/* TERMINAL */}
          <div className="mt-10 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">

            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">

              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-2 font-mono text-xs text-zinc-500">
                terminal
              </span>

            </div>

            <div className="space-y-3 p-5 font-mono text-sm">

              <p>
                <span className="text-green-400">$</span>{" "}
                whoami
              </p>

              <p className="text-zinc-400">
                developer
              </p>

              <p>
                <span className="text-green-400">$</span>{" "}
                status
              </p>

              <p className="text-green-400">
                ✓ Ready to build
              </p>

              <p>
                <span className="text-green-400">$</span>{" "}
                _
              </p>

            </div>

          </div>

        </div>


        {/* LOGIN CARD */}
        <div className="w-full max-w-md justify-self-center">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

            {/* TITLE */}
            <div className="mb-8">

              <p className="font-mono text-sm text-green-400">
                / login
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Sign in
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Enter your credentials to continue.
              </p>

            </div>


            {/* FORM */}
            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >

              {/* EMAIL */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  required
                  onChange={handleEmail}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-green-400"
                />

              </div>


              {/* PASSWORD */}
              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-zinc-300"
                  >
                    Password
                  </label>

                  <a
                    href="#"
                    className="text-xs text-green-400 hover:underline"
                  >
                    Forgot password?
                  </a>

                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={handlePassword}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-green-400"
                />

              </div>


              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="w-full rounded-lg bg-green-400 px-4 py-3 font-semibold text-zinc-950 transition hover:bg-green-300 cursor-pointer"
              >
                Sign in →
              </button>

            </form>


            {/* REGISTER */}
            <div className="mt-8 border-t border-zinc-800 pt-6 text-center">

              <p className="text-sm text-zinc-500">
                Don't have an account?
              </p>

              <a
                href="/register"
                className="mt-2 inline-block text-sm font-medium text-green-400 hover:underline"
              >
                Create an account →
              </a>

            </div>

          </div>

        </div>

      </div>

    </main>

  )

}

