export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">

      {/* HERO */}
      <section className="border-b border-zinc-800">

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

          <div className="max-w-4xl">

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Build your
              <span className="block text-green-400">
                perfect setup.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              DevStore reúne herramientas y dispositivos seleccionados
              para developers que quieren construir, crear y trabajar
              mejor.
            </p>

            {/* Botones */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/products"
                className="rounded-lg bg-green-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-green-300"
              >
                Browse products →
              </a>

              <a
                href="/login"
                className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                Login
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* COMANDO */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Texto */}
          <div>

            <p className="font-mono text-sm text-green-400">
              // developer essentials
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Everything your
              <br />
              setup needs.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-zinc-400">
              From laptops to develop your projects to keyboards, monitors and accessories to create a space where you can focus on what's important: building.
            </p>

          </div>

          {/* Terminal Card */}
          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 font-mono text-sm">

            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">

              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-2 text-zinc-500">
                devstore — terminal
              </span>

            </div>

            {/* Terminal Content */}
            <div className="space-y-4 p-6">

              <p>
                <span className="text-green-400">$</span>{" "}
                find ./products
              </p>

              <p className="text-zinc-400">
                ./laptops
              </p>

              <p className="text-zinc-400">
                ./keyboards
              </p>

              <p className="text-zinc-400">
                ./mouse
              </p>

              <p className="text-zinc-400">
                ./monitors
              </p>

              <p>
                <span className="text-green-400">$</span>{" "}
                <span className="animate-pulse">_</span>
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORÍAS */}
      <section className="border-y border-zinc-800 bg-zinc-900/30">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="font-mono text-sm text-green-400">
                $ ls categories
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Explore the store.
              </h2>

            </div>

            <a
              href="/products"
              className="text-sm text-green-400 hover:underline"
            >
              View all products →
            </a>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <a
              href="/products"
              className="group rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-green-400/50"
            >
              <span className="font-mono text-zinc-600">
                01
              </span>

              <h3 className="mt-8 text-xl font-bold">
                💻 Laptops
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Machines for building.
              </p>

              <p className="mt-6 text-green-400 opacity-0 transition group-hover:opacity-100">
                Explore →
              </p>
            </a>

            <a
              href="/products"
              className="group rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-green-400/50"
            >
              <span className="font-mono text-zinc-600">
                02
              </span>

              <h3 className="mt-8 text-xl font-bold">
                ⌨️ Keyboards
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Code comfortably.
              </p>

              <p className="mt-6 text-green-400 opacity-0 transition group-hover:opacity-100">
                Explore →
              </p>
            </a>

            <a
              href="/products"
              className="group rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-green-400/50"
            >
              <span className="font-mono text-zinc-600">
                03
              </span>

              <h3 className="mt-8 text-xl font-bold">
                🖱️ Mouse
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Precision matters.
              </p>

              <p className="mt-6 text-green-400 opacity-0 transition group-hover:opacity-100">
                Explore →
              </p>
            </a>

            <a
              href="/products"
              className="group rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-green-400/50"
            >
              <span className="font-mono text-zinc-600">
                04
              </span>

              <h3 className="mt-8 text-xl font-bold">
                🖥️ Monitors
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                See more. Build more.
              </p>

              <p className="mt-6 text-green-400 opacity-0 transition group-hover:opacity-100">
                Explore →
              </p>
            </a>

          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 md:p-16">

          <p className="font-mono text-sm text-green-400">
            $ npm run build
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Ready to upgrade
            <br />
            your setup?
          </h2>

          <p className="mt-6 max-w-xl text-zinc-400">
            Encuentra las herramientas que necesitas para tu próximo
            proyecto.
          </p>

          <a
            href="/products"
            className="mt-8 inline-block rounded-lg bg-green-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-green-300"
          >
            Get started →
          </a>

        </div>

      </section>

    </main>
  )
}