import React from "react";
import { MdOutlineSettings } from "react-icons/md";
import { LuLayoutDashboard, LuPackageOpen } from "react-icons/lu";
import { PiCashRegisterLight } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { IconBaseProps } from "react-icons";

const iconManifest = {
  LuLayoutDashboard,
  LuPackageOpen,
  PiCashRegisterLight,
  GiTakeMyMoney,
  MdOutlineSettings,
};

interface IconProps {
  name: string;
  size?: string;
  color?: string;
}

const DynamicIcon: React.FC<IconProps> = ({
  name,
  size = "1em",
  color = "currentColor",
}) => {
  const IconComponent = iconManifest[name as keyof typeof iconManifest];

  if (!IconComponent) {
    return <div>Icon not found</div>;
  }

  return <IconComponent size={size} color={color} />;
};

export default DynamicIcon;
