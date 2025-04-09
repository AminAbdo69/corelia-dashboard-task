import { twMerge } from "tailwind-merge";

interface NavButtonProps {
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  isActive,
  children,
  onClick,
  className,
}) => {
  return (
    <button
      data-active={isActive}
      onClick={onClick}
      className={twMerge(
        "text-left flex items-center gap-2 px-4 py-2 rounded-md border-2 border-transparent hover:border-sky-500/30 hover:bg-blue-100/50 hover:text-blue-700 [[data-active=true]]:border-sky-500/30 [[data-active=true]]:bg-blue-400/30 [[data-active=true]]:text-blue-700",
        className
      )}
    >
      {children}
    </button>
  );
};

export default NavButton;
