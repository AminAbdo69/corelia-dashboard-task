import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  isActive = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-1.5 rounded-md text-sm font-medium border ${
        isActive
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
