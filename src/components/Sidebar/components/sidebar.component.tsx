import CoreliaLogo from "../../../assets/images/corelia-logo.png";
import { CVSS, Project, Question, User } from "../../../assets/icons";
import CollapsibleOption from "./collapsible-options.component";
import NavButton from "./nav-button.component";

interface SidebarProps {
  className?: string;
}
const iconClass = "w-4 h-4";
export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="p-4">
        <img src={CoreliaLogo} alt="Corelia Logo" />
      </div>
      <nav className=" grid p-4 space-y-2 text-gray-700">
        <NavButton>
          <User className={iconClass} /> Clients
        </NavButton>
        <NavButton>
          <Project className={iconClass} /> Projects
        </NavButton>
        <NavButton>
          <User className={iconClass} /> People
        </NavButton>
        <CollapsibleOption />
        <NavButton>
          <Question className={iconClass} /> Questions
        </NavButton>
        <NavButton>
          <CVSS className={iconClass} /> CVSS
        </NavButton>
      </nav>
    </div>
  );
};
