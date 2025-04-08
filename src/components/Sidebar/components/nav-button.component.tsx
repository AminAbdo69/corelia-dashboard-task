import { twMerge } from "tailwind-merge";

interface NavButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "text-left flex items-center gap-2 px-4 py-2 rounded-md border-2 border-transparent hover:border-sky-500/30 hover:bg-blue-400/30 hover:text-blue-700",
        className
      )}
    >
      {children}
    </button>
  );
};

export default NavButton;
