import { ProductCard } from "../components/ProductCard"


export default function Products() {

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">

            {/* HEADER */}
            <section className="border-b border-zinc-800">
                <div className="mx-auto max-w-7xl px-6 py-12">

                    <p className="font-mono text-sm text-green-400">
                        $ devstore products
                    </p>

                    <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                        <div>
                            <h1 className="text-4xl font-bold md:text-5xl">
                                Developer Store
                            </h1>

                            <p className="mt-3 max-w-xl text-zinc-400">
                                Everything you need to build your next project.
                            </p>
                        </div>

                        {/* SEARCH */}
                        <div className="w-full md:w-80">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-green-400"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* CONTENT */}
            <section className="mx-auto max-w-7xl px-6 py-12">

                <div className="grid gap-10 lg:grid-cols-[220px_1fr]">

                    {/* SIDEBAR */}
                    <aside>

                        <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                            Categories
                        </p>

                        <div className="mt-4 space-y-2">

                            <button className="w-full rounded-lg bg-green-400 px-4 py-3 text-left text-sm font-semibold text-zinc-950">
                                All products
                            </button>

                            <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100">
                                Laptops
                            </button>

                            <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100">
                                Keyboards
                            </button>

                            <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100">
                                Mouse
                            </button>

                            <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100">
                                Monitors
                            </button>

                        </div>

                    </aside>

                    {/* PRODUCTS */}
                    <div>

                        {/* TOP BAR */}
                        <div className="mb-6 flex items-center justify-between">

                            <p className="font-mono text-sm text-zinc-500">
                                $ ls products
                            </p>

                            <select
                                className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-400 outline-none focus:border-green-400"
                            >
                                <option>Sort by</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Rating</option>
                            </select>

                        </div>

                        {/* PRODUCT GRID */}
                        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

                            <ProductCard />

                        </div>

                    </div>

                </div>

            </section>

        </main>
    )
}