import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { PanelId } from "./utils/panel-ids";
import {
  ClientsPanel,
  PeoplePanel,
  ProjectPanel,
  VRTSGlobalPanel,
  VRTSInternalPanel,
  QuestionsPanel,
  CVSSPanel,
} from "./panels";
import { useState } from "react";

const App = () => {
  const [selectedPanel, setSelectedPanel] = useState<PanelId>("clients");

  const renderPanel = () => {
    switch (selectedPanel) {
      case "clients":
        return <ClientsPanel />;
      case "projects":
        return <ProjectPanel />;
      case "people":
        return <PeoplePanel />;
      case "vrts-global":
        return <VRTSGlobalPanel />;
      case "vrts-internal":
        return <VRTSInternalPanel />;
      case "questions":
        return <QuestionsPanel />;
      case "cvss":
        return <CVSSPanel />;
      default:
        return <div className="p-4">Home panel</div>;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar
        onSelectPanel={setSelectedPanel}
        className="w-50 h-screen bg-white  shadow-sm"
      />

      <div className="flex-1 flex flex-col pl-1">
        <Header />

        <main className="flex-1 bg-gray-50 overflow-y-auto">
          {renderPanel()}
        </main>
      </div>
    </div>
  );
};

export default App;
