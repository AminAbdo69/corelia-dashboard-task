import CoreliaLogo from "../../../assets/images/corelia-logo.png";
import { CVSS, Project, Question, User } from "../../../assets/icons";
import CollapsibleOption from "./collapsible-options.component";
import NavButton from "./nav-button.component";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="p-4">
        <img src={CoreliaLogo} alt="Corelia Logo" />
      </div>
      <nav className=" grid p-4 space-y-2 text-gray-700">
        <NavButton>
          <User /> Clients
        </NavButton>
        <NavButton>
          <Project /> Projects
        </NavButton>
        <NavButton>
          <User /> People
        </NavButton>
        <CollapsibleOption />
        <NavButton>
          <Question /> Questions
        </NavButton>
        <NavButton>
          <CVSS /> CVSS
        </NavButton>
      </nav>
    </div>
  );
};
