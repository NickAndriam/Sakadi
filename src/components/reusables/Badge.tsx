import React from "react";

interface BadgeProps {
  name: string;
}

const Badge: React.FC<BadgeProps> = ({ name }) => {
  return (
    <span className="bg-black text-white text-sm px-2 rounded-full">
      {name}
    </span>
  );
};

export default Badge;
