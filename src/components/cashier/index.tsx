import Image from "next/image";
import { CategoryType } from "@/types/cashier";
import { CartInterface, ProductInterface } from "@/types/product";
import { CiShoppingCart } from "react-icons/ci";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "../modals/ProductEdit";
import { LuMinus } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

export const CartItem: React.FC<{
  product: CartInterface;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onDelete?: () => void;
}> = ({ product, onIncrease, onDecrease, onDelete }) => {
  return (
    <div
      className="w-full bg-white p-2 rounded-md shadow-sm border-2 border-l-black"
      w-tid={73}
    >
      <div className="flex justify-between items-start mb-2" w-tid={74}>
        <div w-tid={75}>
          <h2 className="font-semibold block text-xs" w-tid={76}>
            {product?.name}
          </h2>
          <span className="text-xs text-gray-500 block py-1" w-tid={77}>
            <span className="font-bold">Categorie:</span> {product?.category} |{" "}
            <span className="font-bold">Taille:</span> {product?.size}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 cursor-pointer hover:text-red-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          w-tid="10"
          onClick={onDelete}
        >
          <path
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            w-tid="11"
          ></path>
        </svg>
      </div>
      <div className="flex justify-between items-center" w-tid={82}>
        <div className="flex items-center" w-tid={78}>
          <button
            className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition"
            w-tid={79}
            onClick={onDecrease}
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-100" w-tid={80}>
            {product.count ?? 1}
          </span>
          <button
            className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition"
            w-tid={81}
            onClick={onIncrease}
          >
            +
          </button>
        </div>
        <div className="flex flex-col justify-center items-end">
          <span className="text-xs text-gray-400" w-tid={83}>
            {(product?.price ?? 0).toLocaleString()} Ar x {product?.count}
          </span>
          <span className="font-bold text-lg" w-tid={84}>
            {((product?.price ?? 0) * (product?.count ?? 1)).toLocaleString()}{" "}
            Ar
          </span>
        </div>
      </div>
    </div>
  );
};

export const ProductCard: React.FC<{
  onClick: () => void;
  product: ProductInterface;
  color: string;
  size: string;
}> = ({ product, onClick, color, size }) => {
  return (
    <div className="relative" onClick={onClick}>
      <div className="absolute -right-2 -top-2 bg-black text-white text-xs rounded-full h-6 w-6 grid place-items-center border-[0.5px] border-white">
        {product.stock}
      </div>
      <div className=" bg-white hover:bg-black hover:text-white p-4 rounded-lg shadow flex justify-center items-center flex-row text-left cursor-pointer">
        <Image
          src="/images/hoodie.png"
          alt="clothes"
          className="w-24 h-20 object-cover mb-2 rounded"
          w-tid={48}
          width={50}
          height={50}
        />
        <div>
          <h3 className="text-md font-semibold flex-grow">{product.name}</h3>
          <p className="text-xs text-gray-500 py-2">
            Couleur: <span className="font-bold">{color}</span>
          </p>
          <div>
            <div className="flex gap-2 text-xs text-gray-500">
              Taille:<span className="font-bold">{size}</span>
              {/* <select
                id="paymentStatus"
                className="block w-10 bg-transparent border-b border-gray-300 focus:outline-none rounded-none "
                onChange={(e) => setSize(e?.target?.value)}
              >
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select> */}
            </div>
            <div className="flex justify-end items-end mt-2 gap-4">
              <p className="text-md font-bold">
                {product.price?.toLocaleString()} Ar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CategoryButton: React.FC<CategoryType> = ({
  title,
  icon,
  onClick,
  active,
}) => {
  return (
    <button
      className={`flex flex-col items-center justify-center p-4 hover:bg-black hover:text-white rounded-lg shadow flex-shrink-0
          ${
            active
              ? "bg-gradient-to-br to-black from-gray-700 text-white"
              : "bg-white text-black"
          }`}
      onClick={onClick}
    >
      <Image
        src={`/svg/${icon}.svg` ?? ""}
        width={90}
        height={90}
        className="text-white"
        alt="icon"
      />
      <span className="text-sm mt-2" w-tid={16}>
        {title}
      </span>
    </button>
  );
};

export const SubCategoryButton: React.FC<CategoryType> = ({
  title,
  icon,
  onClick,
  category,
  active,
}) => {
  return (
    <button
      className={`flex items-center justify-around px-3 py-3 text-sm rounded-lg font-semibold hover:bg-black hover:text-white transition whitespace-nowrap flex-shrink-0
            ${
              active
                ? "bg-gradient-to-br to-black from-gray-700 text-white"
                : "bg-white text-black"
            }`}
      onClick={onClick}
    >
      <Image
        src={`/svg/${category}.svg` ?? ""}
        width={50}
        height={50}
        alt={category ?? "icon"}
      />
      {title}
    </button>
  );
};

export const Color: React.FC<{
  selected?: any;
  list: Array<{ name: string; hex: string; rgb: string }>;
  getColor: (color: string) => void;
}> = ({ selected, list, getColor }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2 cursor-pointer">
      {list?.map((i, index) => (
        <div
          key={index}
          onClick={() => getColor(i.name)}
          className={`
                ${selected === i.name ? "ring ring-offset-2 ring-gray-500" : ""}
                h-10 w-10 rounded-full flex-shrink-0 hover:opacity-70`}
          style={{ backgroundColor: i.hex }}
        />
      ))}
    </div>
  );
};

export const Size: React.FC<{
  selected?: any;
  //   list: Array<{ name: string; hex: string; rgb: string }>;
  getSize: (color: string) => void;
}> = ({ selected, getSize }) => {
  const sizeList = ["S", "M", "L", "XL", "XXL"];
  return (
    <div className="flex flex-row flex-wrap gap-2 ">
      {sizeList.map((i, index) => (
        <div
          className={`
            ${
              selected === i
                ? "bg-gradient-to-r from-black to-gray-700 text-white"
                : "text-gray-500"
            }
            h-10 w-10 bg-white shadow-md rounded-md flex-shrink-0 grid place-items-center hover:bg-black hover:text-white cursor-pointer`}
          key={index}
          onClick={() => getSize(i)}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export const SubCatList: React.FC<CategoryType> = ({
  title,
  icon,
  onClick,
  price,
  category,
  active,
  stock,
}) => {
  return (
    <button
      className={`flex items-center justify-between py-2 pl-2 pr-4 text-sm rounded-lg font-semibold hover:bg-black hover:text-white transition whitespace-nowrap flex-shrink-0
          ${
            active
              ? "bg-gradient-to-br to-black from-gray-700 text-white"
              : "bg-white text-black"
          }`}
      onClick={onClick}
    >
      <Image
        src={`/svg/${category}.svg` ?? ""}
        width={30} // Smaller width for smaller screens
        height={30} // Smaller height for smaller screens
        className="lg:h-14 lg:w-14 h-8 w-8"
        alt={category ?? "icon"}
      />
      <div className="flex flex-col gap-1 items-start w-3/5 overflow-x-scroll hideScroll">
        <p className="lg:text-xs md:text-[12px] text-[12px] min-w-fit break-words">
          {title.toUpperCase()}
        </p>
        <div className="flex gap-1">
          <p className="opacity-60 text-[8px] md:text-xs">Stock: {stock}</p>
          <p className="opacity-60 text-[8px] md:text-xs">| Taille: M</p>
        </div>
      </div>
      <p className="text-[10px] md:text-sm font-bold">
        {price?.toLocaleString()} Ar
      </p>
    </button>
  );
};
