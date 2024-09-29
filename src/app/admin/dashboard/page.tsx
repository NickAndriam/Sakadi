"use client";
import DashSInfo from "@/components/cards/DashSInfo";
import DashStatInfo from "@/components/cards/DashStatInfo";
import Header from "@/components/reusables/Header";
import Table from "@/components/table/Table";
import React from "react";

export default function Dashboard() {
  return (
    <main>
      <Header title="Dashboard" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <DashSInfo title="Vente Recente" amount={60000} percentage={15} />
        <DashSInfo title="Revenu" amount={300000} percentage={15} />
        <DashSInfo title="Profit" amount={42000} percentage={15} />
        <DashSInfo title="Coût" amount={12000} percentage={15} />
      </div>
      <div className="bg-white rounded-lg shadow p-4 mb-8 overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Tableau des ventes
        </h3>
        <Table />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <DashStatInfo title="Vente Revenue" image="/images/chart1.png" />
        <DashStatInfo title="Net Profit" image="/images/chart2.png" />
        <DashStatInfo
          title="Vente incitative/croisée"
          image="/images/chart3.png"
        />
        <DashStatInfo title="Vente Revenue" image="/images/chart4.png" />
      </div>
    </main>
  );
}
