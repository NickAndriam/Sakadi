import React from "react";
import { formatNumber } from "@/utils/formatter";

type Props = {
  title: string;
  amount: number;
  percentage: number;
};

const DashSInfo: React.FC<Props> = ({ title, amount, percentage }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 animate-fade-in">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-1">
        {formatNumber(amount)} Ar
      </p>
      <div className="flex items-center text-sm">
        <span className="text-blue-400 mr-1">{percentage}%</span>
        <span className="text-gray-500">vs last month</span>
      </div>
    </div>
  );
};

export default DashSInfo;
