import React from "react";
interface IBrandCardProps {
  brand: {
    id: number;
    name: string;
    icon: React.ComponentType<any>;
  };
}

const BarndCard: React.FC<IBrandCardProps> = ({ brand }) => {
  const IconComponent = brand.icon;
  return (
    <div className="bg-[#F3F3F3] flex-col min-h-[120px] rounded-[8px] flex items-center justify-center gap-2">
      <IconComponent />
      <p>{brand.name}</p>
    </div>
  );
};

export default BarndCard;
