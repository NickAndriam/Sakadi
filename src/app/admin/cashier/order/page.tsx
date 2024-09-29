"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TfiPrinter } from "react-icons/tfi";
import category from "@/data/category.json";
import products from "@/data/products.json";
import productList from "@/data/finaleProduct.json";
import { CartInterface, ProductInterface } from "@/types/product";
import {
  CartItem,
  CategoryButton,
  Color,
  ProductCard,
  Size,
  SubCategoryButton,
} from "@/components/cashier";
import { CurrentSelection } from "@/types/cashier";
import { addToCart, idMatch } from "@/utils/cashierFunc";

export default function Cashier() {
  const [cart, setCart] = useState<Array<CartInterface>>([]);
  const [discount, setDiscount] = useState<number>(0);
  const defaultSelection = {
    category: undefined,
    type: undefined,
    color: undefined,
    size: undefined,
  };
  const [currentSelection, setCurrentSelection] =
    useState<CurrentSelection>(defaultSelection);

  //Subcategory
  const subCatList = productList.filter(
    (list) => list.category === currentSelection.category
  )[0]?.types;

  //Products to show
  const productsShow = products.filter((list) =>
    list.name.includes(currentSelection?.category)
  );

  // Products to display as card
  const productToDisplay = productsShow.filter((list) =>
    list.type.includes(currentSelection.type)
  );

  //Total Amount
  const getTotalAmount = () => {
    return cart.reduce((total, item) => {
      return total + (item.price ?? 0) * (item.count ?? 1);
    }, 0); // Start with total of 0
  };
  const total = getTotalAmount().toLocaleString();

  // List of colors to show
  const colors = () => {
    return productsShow.filter((i) => i.type === currentSelection.type)[0]
      ?.colors;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left column: Categories, Subcategories and Products */}
      <div className="w-full lg:w-1/2">
        {/* Main Categories */}
        <h2 className="text-xl font-bold mb-4">Categorie:</h2>
        <div className="overflow-x-auto mb-4">
          <div className="flex gap-4 min-w-max">
            {productList.map((item, index) => (
              <CategoryButton
                key={index}
                title={item.category}
                icon={item.category.toLocaleLowerCase()}
                active={currentSelection.category === item.category}
                onClick={() =>
                  setCurrentSelection({
                    category: item.category,
                    type: undefined,
                  })
                }
              />
            ))}
          </div>
        </div>

        {/* Subcategories */}
        {currentSelection.category ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Style:</h2>
            <div className="overflow-x-auto mb-4" w-tid={34}>
              <div className="flex gap-2 min-w-max" w-tid={35}>
                {subCatList.map((sub, index) => (
                  <SubCategoryButton
                    key={index}
                    title={sub.name}
                    category={currentSelection.category}
                    active={currentSelection.type === sub.name}
                    onClick={() =>
                      setCurrentSelection({
                        ...currentSelection,
                        type: sub.name,
                        color: undefined,
                        size: undefined,
                      })
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {/* Color and Size */}
        {currentSelection.type ? (
          <section className="flex justify-around items-start gap-4 mb-4">
            <div className="flex flex-col justify-start w-1/2">
              <h2 className="text-xl font-bold mb-4">Couleur:</h2>
              <Color
                selected={currentSelection.color}
                list={colors()}
                getColor={(e) =>
                  setCurrentSelection({ ...currentSelection, color: e })
                }
              />
            </div>
            <div className="flex flex-col justify-start w-1/2">
              <h2 className="text-xl font-bold mb-4">Taille:</h2>
              <Size
                selected={currentSelection.size}
                getSize={(e) =>
                  setCurrentSelection({ ...currentSelection, size: e })
                }
              />
            </div>
          </section>
        ) : null}

        {/* Product Grid */}
        {currentSelection.color && currentSelection.size ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Produits:</h2>
            <div className="overflow-x-auto pt-2" w-tid={45}>
              <div className="flex gap-4 min-w-max" w-tid={46}>
                {/* {productToDisplay?.map((item, index) => (
                  <ProductCard
                    key={index}
                    product={item}
                    color={currentSelection.color}
                    size={currentSelection.size}
                    onClick={() =>
                      addToCart(
                        cart,
                        item,
                        currentSelection.size,
                        currentSelection.color,
                        setCart
                      )
                    }
                  />
                ))} */}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* Right column: Checkout */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0" w-tid={67}>
        <div className="bg-white p-6 rounded-lg shadow" w-tid={68}>
          <h2 className="text-xl font-bold mb-4">Section de Facturation</h2>
          <div className="flex flex-col gap-2 bg-[#f3f4f6] p-2">
            {cart?.length !== 0 ? (
              cart?.map((item, index) => (
                <CartItem
                  key={index}
                  product={item}
                  onIncrease={() =>
                    setCart((prevState) =>
                      prevState.map((i) =>
                        idMatch(i, item) ? { ...i, count: i?.count + 1 } : i
                      )
                    )
                  }
                  onDecrease={() =>
                    setCart((prevState) =>
                      prevState.map((i) =>
                        idMatch(i, item)
                          ? { ...i, count: i.count === 1 ? 1 : i?.count - 1 }
                          : i
                      )
                    )
                  }
                  onDelete={() =>
                    setCart((prevState) =>
                      prevState.filter((i) => i?.uid !== item?.uid)
                    )
                  }
                />
              ))
            ) : (
              <p className="text-sm text-gray-400">
                Veuillez choisir un produit!
              </p>
            )}
          </div>
          <div className="border-t pt-4 mb-4" w-tid={85}>
            <div className="flex justify-between mb-2" w-tid={86}>
              <span w-tid={87}>Sous-total:</span>
              <span className="font-bold" w-tid={88}>
                {total} Ar
              </span>
            </div>
            <div className="flex justify-between mb-2" w-tid={89}>
              <span w-tid={90}>Remise Produit:</span>
              <span className="font-bold text-red-600" w-tid={91}>
                {discount === 0 ? "" : "-"} {discount.toLocaleString()} Ar
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4" w-tid={98}>
            <h2 className="font-bold text-lg" w-tid={99}>
              Total:
            </h2>
            <span className="text-xl font-bold" w-tid={100}>
              {(getTotalAmount() - discount).toLocaleString()} Ar
            </span>
          </div>
          <input
            type="number"
            placeholder="Entrez le montant de la remise (Ar)"
            className="w-full p-2 border rounded mb-4 text-end"
            w-tid={101}
            onChange={({ target }) =>
              setDiscount(+target.value ? +target.value : 0)
            }
          />

          <h3 className="font-bold mb-2" w-tid={103}>
            Mode de Paiement
          </h3>
          <div className="flex gap-2 mb-4" w-tid={104}>
            <button
              className="flex-1 bg-gradient-to-r from-black to-gray-800 text-white py-2 rounded hover:bg-gray-800 transition"
              w-tid={105}
            >
              MVola
            </button>
            <button
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition"
              w-tid={106}
            >
              Espèces
            </button>
          </div>
          <textarea
            placeholder="Ajoutez des informations optionnelles ici..."
            className="w-full p-2 border rounded mb-4"
            rows={3}
            w-tid={107}
            defaultValue={""}
          />
          <div className="flex gap-2">
            <button className="w-full flex justify-center items-center gap-2 bg-gray-200 text-black  py-4 rounded hover:bg-gray-300 transition">
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
  );
}
