import React from "react";

export default function Settings() {
  return (
    <div
      className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4"
      w-tid={41}
    >
      <div
        className="w-full flex-grow bg-white p-8 rounded-lg shadow"
        w-tid={42}
      >
        <h1 className="text-2xl font-semibold mb-6" w-tid={43}>
          Paramètres Généraux
        </h1>
        <div className="mb-6" w-tid={44}>
          <div className="flex items-center justify-between" w-tid={45}>
            <div className="flex items-center" w-tid={46}>
              <div
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-white mr-4"
                w-tid={47}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                  w-tid={48}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    w-tid={49}
                  />
                </svg>
              </div>
              <div w-tid={50}>
                <h2 className="text-lg font-semibold" w-tid={51}>
                  Sitraka
                </h2>
                <p className="text-sm text-gray-500" w-tid={52}>
                  Admin
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4" w-tid={54}>
          <div w-tid={55}>
            <label
              className="block text-sm font-medium text-gray-500 mb-1"
              w-tid={56}
            >
              Nom d'utilisateur
            </label>
            <input
              type="text"
              defaultValue="Funnel SaaS"
              className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              w-tid={57}
            />
          </div>
          <div w-tid={58}>
            <label
              className="block text-sm font-medium text-gray-500 mb-1"
              w-tid={59}
            >
              Email
            </label>
            <input
              type="email"
              defaultValue="funnelsaas@gmail.com"
              className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              w-tid={60}
            />
          </div>
          <div w-tid={61}>
            <label
              className="block text-sm font-medium text-gray-500 mb-1"
              w-tid={62}
            >
              Rôle
            </label>
            <input
              type="text"
              defaultValue="Administrateur"
              className="w-full px-3 py-2 bg-gray-100 border-l border-black rounded-md"
              readOnly
              w-tid={63}
            />
          </div>
          <div w-tid={64}>
            <label
              className="block text-sm font-medium text-gray-500 mb-1"
              w-tid={65}
            >
              Date d'inscription
            </label>
            <input
              type="text"
              defaultValue="01/01/2023"
              className="w-full px-3 py-2 bg-gray-100 border-l border-black rounded-md"
              readOnly
              w-tid={66}
            />
          </div>
        </div>
        <div className="mt-6" w-tid={67}>
          <h3 className="text-lg font-semibold mb-3" w-tid={68}>
            Changer le mot de passe
          </h3>
          <div className="space-y-3" w-tid={69}>
            <div w-tid={70}>
              <label
                className="block text-sm font-medium text-gray-500 mb-1"
                w-tid={71}
              >
                Mot de passe actuel
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                w-tid={72}
              />
            </div>
            <div w-tid={73}>
              <label
                className="block text-sm font-medium text-gray-500 mb-1"
                w-tid={74}
              >
                Nouveau mot de passe
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                w-tid={75}
              />
            </div>
            <div w-tid={76}>
              <label
                className="block text-sm font-medium text-gray-500 mb-1"
                w-tid={77}
              >
                Confirmer le nouveau mot de passe
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                w-tid={78}
              />
            </div>
          </div>
        </div>
        <div className="mt-6" w-tid={79}>
          <button
            className="w-full px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-blue-500 transition duration-300"
            w-tid={80}
          >
            Enregistrer les modifications
          </button>
        </div>
      </div>
      {/* User list */}
      <div className="settings-card w-full lg:w-2/4 md:1/2" w-tid={81}>
        <h2 className="text-xl font-semibold mb-4" w-tid={82}>
          Utilisateurs
        </h2>
        <div className="space-y-4" w-tid={83}>
          <div
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
            w-tid={84}
          >
            <div className="flex items-center" w-tid={85}>
              <div
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3"
                w-tid={86}
              >
                JS
              </div>
              <div w-tid={87}>
                <p className="font-medium" w-tid={88}>
                  Hoby
                </p>
                <p className="text-sm text-gray-500" w-tid={89}>
                  034 12 345 67
                </p>
              </div>
            </div>
            <span
              className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full"
              w-tid={90}
            >
              Admin
            </span>
          </div>
          <div
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
            w-tid={91}
          >
            <div className="flex items-center" w-tid={92}>
              <div
                className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white mr-3"
                w-tid={93}
              >
                RD
              </div>
              <div w-tid={94}>
                <p className="font-medium" w-tid={95}>
                  Rado
                </p>
                <p className="text-sm text-gray-500" w-tid={96}>
                  034 12 345 67
                </p>
              </div>
            </div>
            <span
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
              w-tid={97}
            >
              Vendeur
            </span>
          </div>
        </div>
        <div className="mt-4" w-tid={105}>
          <button
            className="w-full px-4 py-2 bg-gradient-to-r hover: from-blue-400 to-blue-700 hover:bg-gradient-to-r hover:from-black hover:to-gray-800 text-white rounded-md text-sm font-medium  transition duration-300"
            w-tid={106}
          >
            Ajouter un utilisateur
          </button>
        </div>
      </div>
    </div>
  );
}
