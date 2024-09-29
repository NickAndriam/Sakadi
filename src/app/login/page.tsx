"use client";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <main className="w-full h-full pt-12 grid place-items-center">
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full"
        w-tid={8}
      >
        <div className="p-8" w-tid={9}>
          <div className="text-center mb-8" w-tid={10}>
            <h2 className="text-2xl font-bold text-gray-800" w-tid={12}>
              Connexion à votre compte
            </h2>
          </div>
          <form className="space-y-6" w-tid={13}>
            <div w-tid={14}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
                w-tid={15}
              >
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                w-tid={16}
              />
            </div>
            <div w-tid={17}>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
                w-tid={18}
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                w-tid={19}
              />
            </div>
            <div className="flex items-center justify-between" w-tid={20}>
              <div className="flex items-center" w-tid={21}>
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  w-tid={22}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                  w-tid={23}
                >
                  Se souvenir de moi
                </label>
              </div>
              <a
                href="https://webengine.ai#"
                className="text-sm text-black hover:underline"
                w-tid={24}
              >
                Mot de passe oublié?
              </a>
            </div>
            <div w-tid={25}>
              <Link href="/admin/dashboard">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  w-tid={26}
                >
                  Se connecter
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
