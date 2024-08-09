import Link from "next/link";
import { Suspense } from "react";

interface MenuItemProps {
  item: {
    path: string;
    name: string;
  };
  isActive: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, isActive }) => {
  return (
   
      <div className="relative mb-4">
        <Link
          href={item.path}
          className={`p-2 ${
            isActive ? "font-bold" : ""
          } hover:text-blue-500 text-sm`}
        >
          {item.name}
        </Link>
        {isActive && (
          <div className="absolute bottom-[-4px] left-0 w-full h-1 bg-blue-500 rounded-md" />
        )}
      </div>
   
  );
};

export default MenuItem;
