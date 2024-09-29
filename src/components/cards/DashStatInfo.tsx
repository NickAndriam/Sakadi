import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
};

const DashSInfo: React.FC<Props> = ({ title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 pb-10" w-tid={87}>
      <h3 className="text-xl font-semibold text-gray-800 mb-4" w-tid={88}>
        {title}
      </h3>
      <div className="w-full h-full grid place-items-center">
        <Image
          src={image}
          alt="Sary"
          width={400}
          height={300}
          // fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default DashSInfo;
