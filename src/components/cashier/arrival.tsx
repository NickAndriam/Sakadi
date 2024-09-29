import Image from "next/image";
import { motion as m } from "framer-motion";
import { CategoryType } from "@/types/cashier";
import { CartInterface } from "@/types/product";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export const CategoryButtonSmaller: React.FC<CategoryType> = ({
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

export const TypeList: React.FC<CategoryType> = ({
  title,
  onSave = () => {},
  price,
  category,
  active,
}) => {
  const [openCard, setOpenCard] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const onAdd = () => {
    onSave(count);
    setOpenCard(false);
  };

  useEffect(() => {
    setCount(1);
  }, [!openCard]);

  return (
    <div
      className={`bg-white rounded-lg shadow-sm relative transition-all duration-100 ${
        openCard ? "py-4 border border-black" : "py-0"
      }`}
    >
      <div
        className={`w-full flex items-center justify-between text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-75 pl-2 pr-5 ${
          active
            ? "bg-gradient-to-br from-gray-700 to-black text-white"
            : "text-black"
        }`}
      >
        <Image
          src={`/svg/${category}.svg` ?? ""}
          width={30}
          height={30}
          className="lg:h-14 lg:w-14 h-8 w-8"
          alt={category ?? "icon"}
        />
        <div className="flex flex-col gap-1 items-start w-3/5">
          <div className="w-full overflow-x-scroll">
            <h2 className="lg:text-xs md:text-[12px] text-[12px]">
              {title.toUpperCase()}
            </h2>
          </div>

          {/* Hidden Feature */}
          <div
            className={`transition-all duration-75 overflow-hidden ${
              openCard ? "max-h-40 flex flex-col gap-1 mt-1" : "max-h-0 hidden"
            }`}
          >
            <p className="opacity-60 lg:text-sm text-xs">Taille: M</p>
            <div className="flex items-center justify-center gap-1">
              <button
                className="p-2 bg-black text-white rounded-full flex items-center justify-center text-base"
                onClick={decreaseCount}
              >
                <LuMinus size={11} />
              </button>
              <input
                className="border border-black rounded-full max-w-10 outline-none text-center text-base"
                value={count}
                type="number"
                onChange={(e) =>
                  setCount(Math.max(1, parseInt(e.target.value) || 1))
                }
              />
              <button
                className="p-2 bg-black text-white rounded-full flex items-center justify-center text-base"
                onClick={increaseCount}
              >
                <GoPlus size={12} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-y-8">
          <p className="text-[14px] md:text-sm font-extrabold">
            {price?.toLocaleString()} Ar
          </p>
          {openCard && (
            <div className="flex items-center justify-center gap-2">
              <button
                className="flex items-center justify-around gap-2 px-2 py-1 rounded-full border border-black hover:border-red-400 text-black hover:text-white hover:bg-red-400"
                onClick={() => setOpenCard(false)}
              >
                <RxCross2 size={12} className="lg:hidden md:hidden block" />
                <p className="text-xs lg:block md:block hidden">Annuler</p>
              </button>
              <button
                className="flex items-center justify-around gap-2 px-2 py-1 rounded-full border hover:border-blue-400 border-black bg-black text-white hover:bg-blue-400"
                onClick={onAdd}
              >
                <FaCheck size={12} className="lg:hidden md:hidden block" />
                <p className="text-xs lg:block md:block hidden">Ajouter</p>
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Clickable area to open the card */}
      {!openCard && (
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => setOpenCard(true)}
        />
      )}
    </div>
  );
};
export const TypeCart: React.FC<CategoryType> = ({
  title,
  onSave = () => {},
  price,
  category,
  active,
  count,
  onIncrease = () => {},
  onDecrease = () => {},
  onDelete = () => {},
  onChange = () => {},
}) => {
  const [openCard, setOpenCard] = useState<boolean>(false);

  return (
    <m.div
      className={`bg-white rounded-lg shadow-sm relative transition-all duration-100 z-10 ${
        openCard ? "py-2 border border-black" : "py-0"
      }`}
    >
      <div
        className={`w-full flex items-center justify-between text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-75 ${
          active
            ? "bg-gradient-to-br from-gray-700 to-black text-white pr-4 py-0"
            : "text-black py-3 px-3"
        }`}
      >
        {!openCard && (
          <p
            className="h-6 w-6 bg-black text-white rounded-full text-xs flex items-center justify-center
           ring-black/30 ring-offset-2 ring-1"
          >
            {count}
          </p>
        )}
        <div className="flex flex-col gap-1 items-start w-3/5">
          <div className="w-full overflow-x-scroll">
            <h2
              className="lg:text-xs md:text-[12px] text-[12px] font-light cursor-pointer"
              onClick={() => setOpenCard(!openCard)}
            >
              {title.toUpperCase()}
            </h2>
          </div>

          {/* Hidden Feature */}
          <div
            className={`transition-all duration-75 overflow-hidden ${
              openCard ? "max-h-40 flex flex-col gap-1" : "max-h-0 hidden"
            }`}
          >
            <p className="opacity-60 lg:text-sm text-xs font-light">
              Taille: M
            </p>
            <div className="flex items-center justify-center gap-1">
              <button
                className="p-2 bg-black text-white rounded-full flex items-center justify-center text-base"
                onClick={onDecrease}
              >
                <LuMinus size={11} />
              </button>
              <input
                className="border border-black rounded-full max-w-10 outline-none text-center text-base"
                value={count}
                type="number"
                onChange={(e) =>
                  onChange(Math.max(1, parseInt(e.target.value) || 1))
                }
              />
              <button
                className="p-2 bg-black text-white rounded-full flex items-center justify-center text-base"
                onClick={onIncrease}
              >
                <GoPlus size={12} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-end gap-y-6">
          <p className="text-[14px] md:text-sm font-extrabold">
            {price?.toLocaleString()} Ar
          </p>
          {openCard && (
            <div className="flex items-center justify-center gap-2">
              <button
                className="flex items-center justify-around gap-2 px-2 py-1 rounded-full border border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                onClick={onDelete}
              >
                <MdOutlineDeleteOutline size={14} />
                {/* <p className="text-xs lg:block md:block hidden">Supprimer</p> */}
              </button>
              <button
                className="flex items-center justify-around gap-2 px-2 py-1 rounded-full border border-black hover:border-black text-black hover:text-white hover:bg-black"
                onClick={() => setOpenCard(false)}
              >
                <FaCheck size={12} />
                {/* <p className="text-xs lg:block md:block hidden">Enregister</p> */}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Clickable area to open the card */}
      {/* {!openCard && (
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setOpenCard(true)}
          />
        )} */}
    </m.div>
  );
};

export const DeliveryList: React.FC<{
  product: CartInterface;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onDelete?: () => void;
}> = ({ product, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="w-full bg-white border-black border-opacity-40 p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="font-semibold block text-xs">{product?.name}</h2>
          {/* <span className="text-xs text-gray-500 block py-1" w-tid={77}>
              <span className="font-bold">Categorie:</span> {product?.category} |{" "}
              <span className="font-bold">Taille:</span> {product?.size}
            </span> */}
        </div>
        <IoCloseOutline
          size={20}
          className="text-red-600 cursor-pointer"
          onClick={onDelete}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition"
            onClick={onDecrease}
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-100">{product.count ?? 1}</span>
          <button
            className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition"
            onClick={onIncrease}
          >
            +
          </button>
        </div>
        <div className="flex flex-col justify-center items-end">
          {/* <span className="text-xs text-gray-400" w-tid={83}>
              {(product?.price ?? 0).toLocaleString()} Ar x {product?.count}
            </span> */}
          <span className="font-bold text-sm opacity-50" w-tid={84}>
            {((product?.price ?? 0) * (product?.count ?? 1)).toLocaleString()}{" "}
            Ar
          </span>
        </div>
      </div>
    </div>
  );
};
