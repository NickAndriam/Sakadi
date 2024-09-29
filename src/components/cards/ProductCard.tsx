import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product() {
  return (
    <Link href="/admin/products/product">
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in hover:shadow-lg transition-shadow duration-300"
        style={{ animationDelay: "0s" }}
      >
        <Image
          width="100"
          height="100"
          src="/images/hoodie.png"
          alt="Sakadi Classic T-Shirt"
          className="w-full h-48 object-cover"
          data-image_id={0}
          alt-rewritten="A vibrant graphic t-shirt design depicting the Sakadi brand logo against a solid background."
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-black">
            Sakadi Classic T-Shirt
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Stock: 150</span>
            <span className="text-lg font-bold text-blue-600">$24.99</span>
          </div>
          {/* <button className="mt-4 w-full bg-black text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200 flex items-center justify-center">
            <i className="fas fa-eye mr-2"></i> View Details
          </button> */}
        </div>
      </div>
    </Link>
  );
}
