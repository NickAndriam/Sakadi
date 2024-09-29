"use client";
import React, { useState } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { TfiPrinter } from "react-icons/tfi";
import products from "@/data/products.json";
import productsList from "@/data/finaleProduct.json";
import { CartInterface } from "@/types/product";
import { CartItem, CategoryButton, SubCatList } from "@/components/cashier";
import { CurrentSelection } from "@/types/cashier";
import { addToCart, idMatch } from "@/utils/cashierFunc";
import Header from "@/components/reusables/Header";
import { countIncDec } from "@/utils/count";
import { TypeCart } from "@/components/cashier/arrival";

export default function Cashier() {
  const [cart, setCart] = useState<Array<CartInterface>>([]);
  const [discount, setDiscount] = useState<number>(0);
  const defaultSelection: CurrentSelection = {
    category: undefined,
    type: undefined,
    color: undefined,
    size: undefined,
  };
  const [currentSelection, setCurrentSelection] =
    useState<CurrentSelection>(defaultSelection);

  const subCatList =
    productsList.find((list) => list.category === currentSelection.category)
      ?.types || [];
  const productsShow = products.filter((list) =>
    list.name.includes(currentSelection?.category)
  );
  const productToDisplay = productsShow.filter((list) =>
    list.type.includes(currentSelection.type)
  );

  const getTotalAmount = () =>
    cart.reduce(
      (total, item) => total + (item.price ?? 0) * (item.count ?? 1),
      0
    );
  const total = getTotalAmount().toLocaleString();

  const handleCategoryClick = (category: string) => {
    setCurrentSelection({ category, type: undefined });
  };

  const handleAddToCart = (sub: any) => {
    addToCart(
      cart,
      uuid(),
      sub.name,
      sub.size || "M",
      sub.price,
      currentSelection.category,
      1,
      setCart
    );
  };

  return (
    <>
      <Header title="Vendre des Produits" />
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column: Categories, Subcategories and Products */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-bold mb-4">Categorie:</h2>
          <div className="overflow-x-auto mb-4">
            <div className="flex gap-4 min-w-max">
              {productsList.map((item, index) => (
                <CategoryButton
                  key={index}
                  title={item.category}
                  icon={item.category.toLocaleLowerCase()}
                  active={currentSelection.category === item.category}
                  onClick={() => handleCategoryClick(item.category)}
                />
              ))}
            </div>
          </div>

          {currentSelection.category && (
            <div>
              <h2 className="text-xl font-bold mb-4">Style:</h2>
              <div className="mb-4">
                <div className="flex flex-col w-full gap-2">
                  {subCatList.map((sub, index) => (
                    <SubCatList
                      key={index}
                      title={sub.name}
                      category={currentSelection.category}
                      price={sub.price}
                      stock={sub.stock}
                      active={currentSelection.type === sub.name}
                      onClick={() => handleAddToCart(sub)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right column: Checkout */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Section de Facturation</h2>
            <div className="flex flex-col gap-2 bg-[#f3f4f6] p-2">
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <TypeCart
                    key={index}
                    title={item.name ?? "..."}
                    price={item.price}
                    category={item.category}
                    count={item.count}
                    onChange={(count: number) =>
                      countIncDec(item).changeCount(count, setCart)
                    }
                    onIncrease={() => countIncDec(item).increase(setCart)}
                    onDecrease={() => countIncDec(item).decrease(setCart)}
                    onDelete={() =>
                      setCart((prevState) =>
                        prevState.filter((i) => i.uid !== item.uid)
                      )
                    }
                  />
                  // <CartItem
                  //   key={index}
                  //   product={item}
                  //   onIncrease={() =>
                  //     setCart((prevState) =>
                  //       prevState.map((i) =>
                  //         idMatch(i, item) ? { ...i, count: i.count + 1 } : i
                  //       )
                  //     )
                  //   }
                  //   onDecrease={() =>
                  //     setCart((prevState) =>
                  //       prevState.map((i) =>
                  //         idMatch(i, item)
                  //           ? { ...i, count: Math.max(1, i.count - 1) }
                  //           : i
                  //       )
                  //     )
                  //   }
                  //   onDelete={() =>
                  //     setCart((prevState) =>
                  //       prevState.filter((i) => i.uid !== item.uid)
                  //     )
                  //   }
                  // />
                ))
              ) : (
                <p className="text-sm text-gray-400">
                  Veuillez choisir un produit!
                </p>
              )}
            </div>
            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>Sous-total:</span>
                <span className="font-bold">{total} Ar</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Remise Produit:</span>
                <span className="font-bold text-red-600">
                  {discount === 0 ? "" : "-"} {discount.toLocaleString()} Ar
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Total:</h2>
              <span className="text-xl font-bold">
                {(getTotalAmount() - discount).toLocaleString()} Ar
              </span>
            </div>
            <input
              type="number"
              placeholder="Entrez le montant de la remise (Ar)"
              className="w-full p-2 border rounded mb-4 text-end"
              onChange={({ target }) => setDiscount(+target.value || 0)}
            />

            <h3 className="font-bold mb-2">Mode de Paiement</h3>
            <div className="flex gap-2 mb-4">
              <button className="flex-1 bg-gradient-to-r from-black to-gray-800 text-white py-2 rounded hover:bg-gray-800 transition">
                MVola
              </button>
              <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition">
                Espèces
              </button>
            </div>
            <textarea
              placeholder="Ajoutez des informations optionnelles ici..."
              className="w-full p-2 border rounded mb-4"
              rows={3}
              defaultValue=""
            />
            <div className="flex gap-2">
              <button className="w-full flex justify-center items-center gap-2 bg-gray-200 text-black py-4 rounded hover:bg-gray-300 transition">
                <TfiPrinter />
                Imprimer
              </button>
              <Link
                href="/admin/sold"
                className="w-full flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-600 hover:from-gray-600 hover:to-black text-white p-2 rounded transition"
              >
                <p className="text-center">Passer la Commande</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
