import Product from "@/components/cards/ProductCard";
import Pagination from "@/components/reusables/Pagination";
import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <main className="flex-1 overflow-y-auto" w-tid={18}>
      <div className="flex justify-between items-center mb-8" w-tid={19}>
        <h2 className="text-3xl font-semibold text-gray-800" w-tid={20}>
          Produits
        </h2>
        <div className="flex items-center space-x-4" w-tid={21}>
          <Link href="/admin/products/add">
            <button
              id="addProductBtn"
              className="hover:bg-blue-600 text-white px-4 py-2 rounded-md bg-black transition duration-200 flex items-center"
              w-tid={22}
            >
              <i className="fas fa-plus mr-2" w-tid={23} /> Ajoutez un produit
            </button>
          </Link>
        </div>
      </div>
      {/* Search and Filter Section */}
      <div className=" mb-6 flex flex-wrap items-center gap-4 px-1" w-tid={25}>
        <div className="flex-grow" w-tid={26}>
          <input
            type="text"
            id="searchInput"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            w-tid={27}
          />
        </div>
        <div className="flex gap-4" w-tid={28}>
          <select
            id="categoryFilter"
            className="text-black px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            w-tid={29}
          >
            <option value="" w-tid={30}>
              All Categories
            </option>
            <option value="T-Shirt" w-tid={31}>
              T-Shirts
            </option>
            <option value="Hoodie" w-tid={32}>
              Hoodies
            </option>
            <option value="Jeans" w-tid={33}>
              Jeans
            </option>
            <option value="Dress" w-tid={34}>
              Dresses
            </option>
            <option value="Sneakers" w-tid={35}>
              Sneakers
            </option>
            <option value="Jacket" w-tid={36}>
              Jackets
            </option>
          </select>
          <select
            id="priceFilter"
            className="text-black px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            w-tid={37}
          >
            <option value="" w-tid={38}>
              All Prices
            </option>
            <option value="0-25" w-tid={39}>
              $0 - $25
            </option>
            <option value="25-50" w-tid={40}>
              $25 - $50
            </option>
            <option value="50-75" w-tid={41}>
              $50 - $75
            </option>
            <option value="75+" w-tid={42}>
              $75+
            </option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div
        id="productGrid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        w-tid={43}
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      {/* Pagination */}
      <div className="mt-8 flex justify-center" w-tid={44}>
        <Pagination />
      </div>
    </main>
  );
}
