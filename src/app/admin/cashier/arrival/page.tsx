"use client";
import React, { useState } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { TfiPrinter } from "react-icons/tfi";
import products from "@/data/products.json";
import productsList from "@/data/finaleProduct.json";
import { CartInterface } from "@/types/product";
import { IoIosArrowDown } from "react-icons/io";
import { CartItem, CategoryButton, SubCatList } from "@/components/cashier";
import { CurrentSelection } from "@/types/cashier";
import { addToCart, idMatch } from "@/utils/cashierFunc";
import Header from "@/components/reusables/Header";
import Title from "@/components/reusables/Title";
import Badge from "@/components/reusables/Badge";
import { countIncDec } from "@/utils/count";
import {
  CategoryButtonSmaller,
  DeliveryList,
  TypeCart,
  TypeList,
} from "@/components/cashier/arrival";
import { useRecoilState } from "recoil";
import { notification } from "@/recoil/atom";

export default function Arrival() {
  const [cart, setCart] = useState<Array<CartInterface>>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [notif, setNotif] = useRecoilState(notification);
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

  const handleAddToCart = (sub: any, count: number) => {
    addToCart(
      cart,
      uuid(),
      sub.name,
      sub.size || "M",
      sub.price,
      currentSelection.category,
      count,
      setCart
    );
  };

  const getTotalCount = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  return (
    <>
      <Header title="Arrivage des Colis" />
      <div className="flex flex-col lg:flex-col gap-8">
        {/* Left column: Categories, Subcategories and Products */}
        <div className="w-full lg:w-full flex flex-col lg:flex-row gap-2 transition-all">
          <div className="">
            <h2 className="text-xl font-bold mb-4">Categories:</h2>
            <div className="mb-4 overflow-x-scroll">
              <div className="flex lg:flex-wrap md:flex-row gap-2">
                {productsList.map((item, index) => (
                  <CategoryButtonSmaller
                    key={index}
                    title={item.category}
                    icon={item.category.toLocaleLowerCase()}
                    active={currentSelection.category === item.category}
                    onClick={() => handleCategoryClick(item.category)}
                  />
                ))}
              </div>
            </div>
          </div>

          {currentSelection.category && (
            <div className="w-full transition-all">
              <h2 className="text-xl font-bold mb-4">Style:</h2>
              <div className="mb-4">
                <div className="flex flex-col w-full gap-2 max-h-72 overflow-y-scroll overflow-x-hidden">
                  {subCatList.map((sub, index) => (
                    <TypeList
                      key={index}
                      title={sub.name}
                      category={currentSelection.category}
                      price={sub.price}
                      stock={sub.stock}
                      active={currentSelection.type === sub.name}
                      onSave={(count: number) => handleAddToCart(sub, count)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right column: Checkout */}
        <div className="w-full mt-8 lg:mt-0">
          <h2 className="text-xl font-bold mb-4">
            List des produits: {getTotalCount()}{" "}
          </h2>
          <div className="bg-white p-3 rounded-xl shadow">
            <div className="flex flex-col gap-2 p-3 bg-gray-100 rounded-lg">
              <div className="rounded-lg overflow-hidden grid lg:grid-cols-2 grid-cols-1 gap-5">
                {productsList.map((product, index) => (
                  <div className="border-gray-300" key={index}>
                    <div className="flex gap-1 mb-2">
                      <Title
                        title={product.category + ":" ?? ""}
                        opacity="opacity-50"
                        style="mb-0"
                      />
                      <span className="text-blue-500 font-bold">
                        {cart.reduce(
                          (accumulator, item) =>
                            product.category === item.category
                              ? accumulator + item.count
                              : accumulator,
                          0
                        )}
                      </span>
                    </div>
                    <div className="shadow-md rounded-lg overflow-hidden flex flex-col gap-1">
                      {cart.length > 0 ? (
                        cart.filter((i) => i.category === product.category)
                          .length > 0 ? (
                          cart
                            .filter((i) => i.category === product.category)
                            .map((item, index) => (
                              <TypeCart
                                key={index}
                                title={item.name ?? "..."}
                                price={item.price}
                                category={item.category}
                                count={item.count}
                                onChange={(count: number) =>
                                  countIncDec(item).changeCount(count, setCart)
                                }
                                onIncrease={() =>
                                  countIncDec(item).increase(setCart)
                                }
                                onDecrease={() =>
                                  countIncDec(item).decrease(setCart)
                                }
                                onDelete={() =>
                                  setCart((prevState) =>
                                    prevState.filter((i) => i.uid !== item.uid)
                                  )
                                }
                              />
                            ))
                        ) : (
                          <p className="text-sm text-gray-400"></p>
                        )
                      ) : (
                        <p className="text-sm text-gray-400"></p>
                      )}
                    </div>
                    {/* <div className="shadow-md rounded-lg overflow-hidden">
                      {cart.length > 0 ? (
                        cart.filter((i) => i.category === product.category)
                          .length > 0 ? (
                          cart
                            .filter((i) => i.category === product.category)
                            .map((item, index) => (
                              <DeliveryList
                                key={index}
                                product={item}
                                onIncrease={() =>
                                  countIncDec(item).increase(setCart)
                                }
                                onDecrease={() =>
                                  countIncDec(item).decrease(setCart)
                                }
                                onDelete={() =>
                                  setCart((prevState) =>
                                    prevState.filter((i) => i.uid !== item.uid)
                                  )
                                }
                              />
                            ))
                        ) : (
                          <p className="text-sm text-gray-400"></p>
                        )
                      ) : (
                        <p className="text-sm text-gray-400"></p>
                      )}
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center my-4 p-2">
              <Title title="Total:" size="text-xl" style="mb-0" />
              <span className="text-xl font-bold">
                {(getTotalAmount() - discount).toLocaleString()} Ar
              </span>
            </div>
            <textarea
              placeholder="Ajoutez des informations optionnelles ici..."
              className="w-full p-2 border rounded mb-4"
              rows={3}
              defaultValue=""
            />
            <div className="flex gap-2">
              <button
                // href="/admin/sold"
                className="w-full flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-600 hover:from-gray-600 hover:to-black text-white p-2 rounded transition"
                onClick={() =>
                  setNotif({
                    type: "success",
                    message: "Colis enregistré",
                    show: true,
                  })
                }
              >
                <p className="text-center">Confirmer Colis</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
