import CoreliaLogo from "../../../assets/images/corelia-logo.png";
import { CVSS, Project, Question, User } from "../../../assets/icons";
import CollapsibleOption from "./collapsible-options.component";
import NavButton from "./nav-button.component";
import { PanelId } from "../../../utils/panel-ids";

interface SidebarProps {
  className?: string;
  selectedPanel: PanelId;
  onSelectPanel: (panelId: PanelId) => void;
}

const iconClass = "w-4 h-4";
export const Sidebar: React.FC<SidebarProps> = ({
  className,
  selectedPanel,
  onSelectPanel,
}) => {
  return (
    <div className={className}>
      <div className="p-4">
        <img src={CoreliaLogo} alt="Corelia Logo" />
      </div>
      <nav className="grid p-4 space-y-2 text-gray-700">
        <NavButton
          isActive={selectedPanel == "clients"}
          onClick={() => onSelectPanel("clients")}
        >
          <User className={iconClass} /> Clients
        </NavButton>
        <NavButton
          isActive={selectedPanel == "projects"}
          onClick={() => onSelectPanel("projects")}
        >
          <Project className={iconClass} /> Projects
        </NavButton>
        <NavButton
          isActive={selectedPanel == "people"}
          onClick={() => onSelectPanel("people")}
        >
          <User className={iconClass} /> People
        </NavButton>
        <CollapsibleOption onSelectPanel={onSelectPanel} />
        <NavButton
          isActive={selectedPanel == "questions"}
          onClick={() => onSelectPanel("questions")}
        >
          <Question className={iconClass} /> Questions
        </NavButton>
        <NavButton
          isActive={selectedPanel == "cvss"}
          onClick={() => onSelectPanel("cvss")}
        >
          <CVSS className={iconClass} /> CVSS
        </NavButton>
      </nav>
    </div>
  );
};
