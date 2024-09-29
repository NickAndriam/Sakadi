import Link from "next/link";
import React from "react";

export default function Product() {
  return (
    <div
      className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden text-black"
      w-tid={9}
    >
      <div className="flex flex-col md:flex-row" w-tid={11}>
        <div className="w-full md:w-1/2 p-4" w-tid={12}>
          <img
            src="/images/hoodie.png"
            alt="Hoodie Sakadi bleu clair"
            className="w-full h-auto object-cover mb-4"
            w-tid={13}
            data-image_id={0}
            alt-rewritten="A vibrant light blue hoodie with minimalist branding, prominently displayed center frame."
          />
          <div className="flex flex-wrap justify-center gap-2" w-tid={14}>
            <img
              src="/images/hoodie.png"
              alt="Miniature hoodie Sakadi bleu clair"
              className="w-16 h-16 object-cover border-2 border-blue-500"
              w-tid={15}
              data-image_id={1}
              alt-rewritten="A soft, light-blue hoodie in miniature size, folded and displayed against a plain background."
            />
            <img
              src="/images/hoodie.png"
              alt="Miniature hoodie Sakadi bleu foncé"
              className="w-16 h-16 object-cover opacity-50"
              w-tid={16}
              data-image_id={2}
              alt-rewritten="Dark navy blue oversized cotton hoodie."
            />
            <img
              src="/images/hoodie.png"
              alt="Miniature hoodie Sakadi blanc"
              className="w-16 h-16 object-cover opacity-50"
              w-tid={17}
              data-image_id={3}
              alt-rewritten="Minimalist product shot of a crisp white Sakadi branded hoodie displayed on a plain background."
            />
            <img
              src="/images/hoodie.png"
              alt="Miniature hoodie Sakadi noir"
              className="w-16 h-16 object-cover opacity-50"
              w-tid={18}
              data-image_id={4}
              alt-rewritten="A close-up photograph of a black cotton hoodie with the Sakadi logo prominently displayed."
            />
            <img
              src="/images/hoodie.png"
              alt="Miniature hoodie Sakadi gris foncé"
              className="w-16 h-16 object-cover opacity-50"
              w-tid={19}
              data-image_id={5}
              alt-rewritten="Elegant dark gray hoodie in closeup, showcasing the high-quality fabric and tailoring of the Sakadi brand."
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6" w-tid={20}>
          <h1 className="text-2xl font-bold mb-2" w-tid={21}>
            Hoodie Sakadi Simple Modern Minimaliste Nordique
          </h1>
          <div className="flex items-center mb-2" w-tid={22}>
            <div className="flex text-yellow-400" w-tid={23}></div>
          </div>
          <p className="text-blue-400 mb-4" w-tid={35}>
            En stock
          </p>
          <div className="mb-4" w-tid={36}>
            <span className="text-2xl font-bold" w-tid={37}>
              98,00 Ar
            </span>
            <span className="text-gray-500 line-through ml-2" w-tid={38}>
              128,00 Ar
            </span>
          </div>
          <div className="mb-4" w-tid={39}>
            <p className="font-bold mb-2" w-tid={40}>
              Sélectionnez la condition:
            </p>
            <div className="flex space-x-2" w-tid={41}>
              <button
                className="px-3 py-1 border border-blue-500 text-blue-400 rounded-full"
                w-tid={42}
              >
                Neuf
              </button>
              <button
                className="px-3 py-1 border border-gray-300 text-gray-700 rounded-full"
                w-tid={43}
              >
                Utilisé
              </button>
              <button
                className="px-3 py-1 border border-gray-300 text-gray-700 rounded-full"
                w-tid={44}
              >
                Reconditionné
              </button>
            </div>
          </div>
          <div className="mb-4" w-tid={45}>
            <p className="font-bold mb-2" w-tid={46}>
              Couleur: Bleu clair
            </p>
            <div className="flex space-x-2" w-tid={47}>
              <button
                className="w-8 h-8 rounded-full bg-purple-500 border-2 border-blue-500"
                w-tid={48}
              />
              <button className="w-8 h-8 rounded-full bg-pink-500" w-tid={49} />
              <button
                className="w-8 h-8 rounded-full bg-green-500"
                w-tid={50}
              />
              <button className="w-8 h-8 rounded-full bg-red-500" w-tid={51} />
            </div>
          </div>
          <ul className="mb-4 text-sm" w-tid={52}>
            <li w-tid={53}>Matériau: 80% coton, 20% polyester</li>
            <li w-tid={54}>Couleur: Bleu clair</li>
            <li w-tid={55}>Taille: S, M, L, XL, XXL</li>
            <li w-tid={56}>Poids: 500 grammes</li>
            <li w-tid={57}>Marque: Sakadi</li>
          </ul>
          {/* <div className="flex items-center mb-4" w-tid={58}>
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-16 px-2 py-1 border rounded-l"
              w-tid={59}
            />
            <button
              className="bg-black text-white px-4 py-1 rounded-r flex items-center"
              w-tid={60}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                w-tid={61}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  w-tid={62}
                />
              </svg>
              Ajouter au panier
            </button>
          </div> */}
          <Link href="/admin/cashier">
            <button
              className="w-full bg-black text-white py-2 rounded mb-4 flex items-center justify-center"
              w-tid={63}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                w-tid={64}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  w-tid={65}
                />
              </svg>
              Vendre maintenant
            </button>
          </Link>
          <Link href="/admin/products/add">
            <button
              className="w-full border border-black text-black py-2 rounded flex items-center justify-center"
              w-tid={66}
            >
              Modifier le Produit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
