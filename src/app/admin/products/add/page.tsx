import Link from "next/link";
import React from "react";

export default function Add() {
  return (
    <main className="flex-1 overflow-y-auto pb-16 md:pb-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full " w-tid={9}>
        <form id="productForm" w-tid={10}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" w-tid={11}>
            <div w-tid={12}>
              <div className="mb-6" w-tid={13}>
                <h2
                  className="text-sm font-semibold text-gray-700 mb-2"
                  w-tid={14}
                >
                  Image Principale du Produit
                </h2>
                <div
                  id="mainImageDropzone"
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors"
                  w-tid={15}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto mb-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    w-tid={16}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      w-tid={17}
                    />
                  </svg>
                  <p className="text-sm text-blue-600" w-tid={18}>
                    Télécharger l'image principale
                  </p>
                  <p className="text-xs text-gray-500 mt-1" w-tid={19}>
                    PNG, JPG, GIF jusqu'à 10MB
                  </p>
                </div>
                <input
                  type="file"
                  id="mainImageInput"
                  className="hidden"
                  accept="image/*"
                  w-tid={20}
                />
                <div id="mainImagePreview" className="mt-4 hidden" w-tid={21} />
              </div>
              <div w-tid={22}>
                <h2
                  className="text-sm font-semibold text-gray-700 mb-2"
                  w-tid={23}
                >
                  Images Additionnelles du Produit
                </h2>
                <div
                  id="additionalImagesDropzone"
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors"
                  w-tid={24}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto mb-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    w-tid={25}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      w-tid={26}
                    />
                  </svg>
                  <p className="text-sm text-blue-600" w-tid={27}>
                    Télécharger des images additionnelles
                  </p>
                  <p className="text-xs text-gray-500 mt-1" w-tid={28}>
                    PNG, JPG, GIF jusqu'à 10MB chacune
                  </p>
                </div>
                <input
                  type="file"
                  id="additionalImagesInput"
                  className="hidden"
                  accept="image/*"
                  multiple
                  w-tid={29}
                />
                <div
                  id="additionalImagesPreview"
                  className="mt-4 grid grid-cols-2 gap-4"
                  w-tid={30}
                />
              </div>
            </div>
            <div w-tid={31}>
              <div className="mb-4" w-tid={32}>
                <label
                  htmlFor="product-name"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  w-tid={33}
                >
                  Nom du Produit
                </label>
                <input
                  type="text"
                  id="product-name"
                  className="w-full px-3 py-2 border border-input-border rounded-md text-gray-700 placeholder-input-placeholder focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Entrez le nom du produit"
                  w-tid={34}
                />
              </div>
              <div className="mb-4" w-tid={35}>
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  w-tid={36}
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  className="w-full px-3 py-2 border border-input-border rounded-md text-gray-700 placeholder-input-placeholder focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Entrez la description du produit"
                  w-tid={37}
                  defaultValue={""}
                />
              </div>
              <div className="mb-4" w-tid={38}>
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  w-tid={39}
                >
                  Catégorie
                </label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-input-border rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-black appearance-none"
                  w-tid={40}
                >
                  <option value="" w-tid={41}>
                    Sélectionnez une catégorie
                  </option>
                  <option value="sweat" w-tid={42}>
                    Sweat
                  </option>
                  <option value="t-shirt" w-tid={43}>
                    T-Shirt
                  </option>
                  <option value="short" w-tid={44}>
                    Short
                  </option>
                  <option value="pant" w-tid={45}>
                    Pantalon
                  </option>
                  <option value="deb" w-tid={46}>
                    Deb
                  </option>
                </select>
              </div>
              <div className="mb-4" w-tid={47}>
                <label
                  htmlFor="subcategory"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  w-tid={48}
                >
                  Sous-catégorie
                </label>
                <select
                  id="subcategory"
                  className="w-full px-3 py-2 border border-input-border rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-black appearance-none"
                  w-tid={49}
                >
                  <option value="" w-tid={50}>
                    Sélectionnez une sous-catégorie
                  </option>
                </select>
              </div>
              <div className="mb-4" w-tid={51}>
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  w-tid={52}
                >
                  Prix
                </label>
                <input
                  type="number"
                  id="price"
                  className="w-full px-3 py-2 border border-input-border rounded-md text-gray-700 placeholder-input-placeholder focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Entrez le prix du produit"
                  step="0.01"
                  min={0}
                  w-tid={53}
                />
              </div>
              <div className="mb-4" w-tid={54}>
                <label
                  htmlFor="stock"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  w-tid={55}
                >
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  className="w-full px-3 py-2 border border-input-border rounded-md text-gray-700 placeholder-input-placeholder focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Entrez la quantité en stock"
                  min={0}
                  w-tid={56}
                />
              </div>
              <div className="mt-6" w-tid={57}>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
                  w-tid={58}
                >
                  Ajouter le Produit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
