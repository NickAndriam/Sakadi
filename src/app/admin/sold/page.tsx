import React from "react";

export default function Sold() {
  return (
    <div className="mx-auto" w-tid={10}>
      <div
        className="bg-white rounded-lg shadow overflow-hidden mb-6"
        w-tid={11}
      >
        {/* Filters */}
        <div className="p-4 border-b" w-tid={12}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            w-tid={13}
          >
            <div className="w-full" w-tid={14}>
              <label
                htmlFor="paymentStatus"
                className="block text-sm font-medium text-gray-700 mb-1"
                w-tid={15}
              >
                Statut
              </label>
              <select
                id="paymentStatus"
                className="block text-gray-400 w-full h-10 border-b border-gray-300 focus:outline-none bg-white rounded-none"
                w-tid={16}
              >
                <option w-tid={17}>Tous</option>
                <option w-tid={18}>Payé</option>
                <option w-tid={19}>Commande</option>
              </select>
            </div>
            <div className="w-full" w-tid={20}>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
                w-tid={21}
              >
                Catégorie
              </label>
              <select
                id="category"
                className="block text-gray-400 w-full h-10 border-b border-gray-300 focus:outline-none bg-white rounded-none"
                w-tid={22}
              >
                <option w-tid={23}>Tous</option>
                <option w-tid={24}>Sweat</option>
                <option w-tid={25}>T-Shirt</option>
                <option w-tid={26}>Shorts</option>
                <option w-tid={27}>Pantalons</option>
              </select>
            </div>
            <div className="w-full" w-tid={28}>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 mb-1"
                w-tid={29}
              >
                Type
              </label>
              <select
                id="type"
                className="block text-gray-400 w-full h-10 border-b border-gray-300 focus:outline-none bg-white rounded-none"
                w-tid={30}
              >
                <option w-tid={31}>Tous</option>
                <option w-tid={32}>Homme</option>
                <option w-tid={33}>Femme</option>
                <option w-tid={34}>Enfant</option>
              </select>
            </div>
            <div className="w-full" w-tid={35}>
              <label
                htmlFor="color"
                className="block text-sm font-medium text-gray-700 mb-1"
                w-tid={36}
              >
                Couleur
              </label>
              <select
                id="color"
                className="block text-gray-400 w-full h-10 border-b border-gray-300 focus:outline-none bg-white rounded-none"
                w-tid={37}
              >
                <option w-tid={38}>Toutes</option>
                <option w-tid={39}>Noir</option>
                <option w-tid={40}>Blanc</option>
                <option w-tid={41}>Rouge</option>
                <option w-tid={42}>Bleu</option>
                <option w-tid={43}>Vert</option>
              </select>
            </div>
            <div className="w-full" w-tid={44}>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
                w-tid={45}
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="block text-gray-400 w-full h-10 border-b border-gray-300 focus:outline-none bg-white rounded-none"
                w-tid={46}
              />
            </div>
            <div className="w-full" w-tid={47}>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
                w-tid={48}
              >
                Recherche
              </label>
              <div className="relative" w-tid={49}>
                <input
                  type="text"
                  id="search"
                  placeholder="Rechercher..."
                  className="block w-full pl-2 pr-3 py-2 rounded-none border-b focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-100"
                  w-tid={50}
                />
                <div
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  w-tid={51}
                >
                  <i className="fas fa-search text-gray-400" w-tid={52} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto" w-tid={53}>
          <table className="min-w-full divide-y divide-gray-200" w-tid={54}>
            <thead className="bg-blue-50" w-tid={55}>
              <tr w-tid={56}>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  w-tid={57}
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  w-tid={58}
                >
                  Produit
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  w-tid={59}
                >
                  Catégorie
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  w-tid={60}
                >
                  Prix
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  w-tid={61}
                >
                  Date de Vente
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  w-tid={62}
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  w-tid={63}
                >
                  Vendeur
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  w-tid={64}
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  w-tid={65}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody
              className="bg-white divide-y divide-gray-200"
              id="productTableBody"
              w-tid={66}
            >
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src="https://replicate.delivery/yhqm/9Uh8xnKzPKImH11iFw0WaiVNi0NysuA7ELyNh8RVZERH5X3E/out-0.webp"
                    alt="Sweat sans capuche léger"
                    className="h-10 w-10 rounded-full"
                    data-image_id={10}
                    alt-rewritten="A close-up photograph of a light, hooded sweatshirt fabric, capturing the subtle textures and weave of the material."
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      Sweat sans capuche léger
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Sweat</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">140,000 Ar</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023-03-15
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Antananarivo
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jean Dupont
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Payé
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex justify-center">
                    <a href="#" className="text-red-600 hover:text-red-900">
                      <i className="fas fa-trash-alt" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src="https://replicate.delivery/yhqm/atRytXoyZ5JVNFIAfEfgwfu01kVJfP2Qh0nCsMcWUyh4RerbC/out-0.webp"
                    alt="T-Shirt classique"
                    className="h-10 w-10 rounded-full"
                    data-image_id={11}
                    alt-rewritten="A classic, white t-shirt displayed against a plain background."
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      T-Shirt classique
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">T-Shirt</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">80,000 Ar</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023-03-14
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Toamasina
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Marie Rakoto
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Commande
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex justify-center">
                    <a href="#" className="text-red-600 hover:text-red-900">
                      <i className="fas fa-trash-alt" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src="https://replicate.delivery/yhqm/XdI60pgQL2qNENc9tdMImujfgAeKEiGPQ1e3pUVAUAs9If1NB/out-0.webp"
                    alt="Short de sport"
                    className="h-10 w-10 rounded-full"
                    data-image_id={12}
                    alt-rewritten="A short photograph of a person engaged in a sporting activity."
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      Short de sport
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Shorts</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">100,000 Ar</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023-03-13
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Antsirabe
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Pierre Rabe
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Payé
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex justify-center">
                    <a href="#" className="text-red-600 hover:text-red-900">
                      <i className="fas fa-trash-alt" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src="https://replicate.delivery/yhqm/ObOFFxVVRM41AdBTZbX1sjIGffmy0Je6XEqD5FZxXaW8If1NB/out-0.webp"
                    alt="Pantalon chino"
                    className="h-10 w-10 rounded-full"
                    data-image_id={13}
                    alt-rewritten="Neatly folded khaki chino pants, showcased in a crisp, clean product photography style."
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      Pantalon chino
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Pantalons</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">160,000 Ar</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023-03-12
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Fianarantsoa
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Sophie Razafy
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Commande
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex justify-center">
                    <a href="#" className="text-red-600 hover:text-red-900">
                      <i className="fas fa-trash-alt" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src="https://replicate.delivery/yhqm/Qz4hu4IpssqfQ6rP7s3qe2XnNGCoPXc57pw5IwJfjcWeRerbC/out-0.webp"
                    alt="Sweat à capuche classique"
                    className="h-10 w-10 rounded-full"
                    data-image_id={14}
                    alt-rewritten="A classic hooded sweatshirt photographed in a minimalist, lifestyle-oriented style."
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      Sweat à capuche classique
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Sweat</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">160,000 Ar</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023-03-11
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Mahajanga
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Luc Andria
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Payé
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex justify-center">
                    <a href="#" className="text-red-600 hover:text-red-900">
                      <i className="fas fa-trash-alt" />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      <div
        className="bg-white px-4 py-3 flex items-center justify-between border border-gray-200 sm:px-6 rounded-lg shadow"
        w-tid={67}
      >
        <div className="flex-1 flex justify-between sm:hidden" w-tid={68}>
          <a
            href="https://sakadi.mg/sold-products#"
            className="relative inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            w-tid={69}
          >
            Précédent
          </a>
          <a
            href="https://sakadi.mg/sold-products#"
            className="ml-3 relative inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            w-tid={70}
          >
            Suivant
          </a>
        </div>
        <div
          className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
          w-tid={71}
        >
          <div w-tid={72}>
            <p className="text-sm text-gray-700" w-tid={73}>
              Affichage de{" "}
              <span className="font-medium" w-tid={74}>
                1
              </span>{" "}
              à{" "}
              <span className="font-medium" w-tid={75}>
                10
              </span>{" "}
              sur{" "}
              <span className="font-medium" w-tid={76}>
                97
              </span>{" "}
              résultats
            </p>
          </div>
          <div w-tid={77}>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
              w-tid={78}
            >
              <a
                href="https://sakadi.mg/sold-products#"
                className="relative inline-flex items-center justify-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                w-tid={79}
              >
                <span className="sr-only" w-tid={80}>
                  Précédent
                </span>
                <i className="fas fa-chevron-left h-5 w-5" w-tid={81} />
              </a>
              <a
                href="https://sakadi.mg/sold-products#"
                aria-current="page"
                className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                w-tid={82}
              >
                1
              </a>
              <a
                href="https://sakadi.mg/sold-products#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                w-tid={83}
              >
                2
              </a>
              <a
                href="https://sakadi.mg/sold-products#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                w-tid={84}
              >
                3
              </a>
              <span
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                w-tid={85}
              >
                ...
              </span>
              <a
                href="https://sakadi.mg/sold-products#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                w-tid={86}
              >
                8
              </a>
              <a
                href="https://sakadi.mg/sold-products#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                w-tid={87}
              >
                9
              </a>
              <a
                href="https://sakadi.mg/sold-products#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center justify-center px-2 py-2 rounded-r-md border text-sm font-medium"
                w-tid={88}
              >
                10
              </a>
              <a
                href="https://sakadi.mg/sold-products#"
                className="relative inline-flex items-center justify-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                w-tid={89}
              >
                <span className="sr-only" w-tid={90}>
                  Suivant
                </span>
                <i className="fas fa-chevron-right h-5 w-5" w-tid={91} />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
