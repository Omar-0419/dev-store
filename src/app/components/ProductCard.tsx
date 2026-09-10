'use client'

import { get } from "@/services/api"
import type { Product } from "@/interfaces/interfaces"
import { useState, useEffect } from "react"

export function ProductCard() {

  const [products, setProducts] = useState<Product[]>([])

  function getProduct() {
    return get<Product[]>('/products')
  }

  useEffect(() => {
    getProduct().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      {
        products.map((product) => (
          <article key={product.id} className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-green-400/50">

            <div className="relative aspect-4/3 overflow-hidden bg-zinc-800">

              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 rounded-md bg-zinc-950/90 px-3 py-1 font-mono text-xs text-green-400">
                {product.category}
              </span>

            </div>

            <div className="p-5">

              <div className="flex items-start justify-between gap-4">

                <h2 className="font-semibold">
                  {product.title}
                </h2>

                <span className="text-sm text-yellow-400">
                  ★ {product.rating}
                </span>

              </div>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-500">
                {product.description}
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="text-xl font-bold">
                  ${product.price}
                </span>

                <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium transition hover:border-green-400 hover:text-green-400">
                  View
                </button>

              </div>

            </div>

          </article>
        ))
      }

    </>
  )
} 
