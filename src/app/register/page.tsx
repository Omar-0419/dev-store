export default function RegisterPage() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-zinc-950 px-6 py-16 text-zinc-100">

      <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden lg:block">

          <p className="font-mono text-sm text-green-400">
            $ devstore register
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Build your
            <span className="block text-green-400">
              developer setup.
            </span>
          </h1>

          <p className="mt-6 max-w-md leading-7 text-zinc-400">
            Create your DevStore account and start building
            the setup you need for your next project.
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
                create-user
              </p>

              <p className="text-zinc-400">
                Creating developer account...
              </p>

              <p className="text-green-400">
                ✓ Account ready
              </p>

              <p>
                <span className="text-green-400">$</span>{" "}
                _
              </p>

            </div>

          </div>

        </div>


        {/* REGISTER CARD */}
        <div className="w-full max-w-md justify-self-center">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

            {/* TITLE */}
            <div className="mb-8">

              <p className="font-mono text-sm text-green-400">
                / register
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Create account
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Create your developer account to get started.
              </p>

            </div>


            {/* FORM */}
            <form className="space-y-5">

              {/* NAME */}
              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-green-400"
                />

              </div>


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
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-green-400"
                />

              </div>


              {/* PASSWORD */}
              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-green-400"
                />

              </div>


              {/* CONFIRM PASSWORD */}
              <div>

                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Confirm password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-green-400"
                />

              </div>


              {/* REGISTER BUTTON */}
              <button
                type="submit"
                className="w-full rounded-lg bg-green-400 px-4 py-3 font-semibold text-zinc-950 transition hover:bg-green-300"
              >
                Create account →
              </button>

            </form>


            {/* LOGIN */}
            <div className="mt-8 border-t border-zinc-800 pt-6 text-center">

              <p className="text-sm text-zinc-500">
                Already have an account?
              </p>

              <a
                href="/login"
                className="mt-2 inline-block text-sm font-medium text-green-400 hover:underline"
              >
                Sign in →
              </a>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}