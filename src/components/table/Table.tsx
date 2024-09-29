import Image from "next/image";
import React from "react";

export default function Table() {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Rank
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Produit
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Location
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Vente
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Revenu
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Profit
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-black">#1</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <Image
                  className="h-10 w-10 rounded-full"
                  src="https://replicate.delivery/yhqm/LDFvEN4S5uZhEpjoemVw8DTIOV2fmgp71JDuYrDS42FGfF3mA/out-0.webp"
                  alt=""
                  data-image_id={0}
                  width="100"
                  height="100"
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">T-Shirt</div>
                <div className="text-sm text-blue-400">2 heure passé</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-black" w-tid={123}>
            Morondava
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-black" w-tid={124}>
            101
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-black" w-tid={125}>
            $2,860
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-black" w-tid={126}>
            $860
          </td>
        </tr>
        {/* Add more rows for other sales representatives */}
      </tbody>
    </table>
  );
}
