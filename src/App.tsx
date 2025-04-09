import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { PanelId } from "./utils/panel-ids";
import { panels } from "./panels";
import { useState } from "react";

const App = () => {
  const [selectedPanel, setSelectedPanel] = useState<PanelId>("clients");

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar
        selectedPanel={selectedPanel}
        onSelectPanel={setSelectedPanel}
        className="w-50 h-screen bg-white  shadow-sm"
      />

      <div className="flex-1 flex flex-col pl-1">
        <Header />

        <main className="flex-1 bg-gray-50 overflow-y-auto">
          {panels[selectedPanel]}
        </main>
      </div>
    </div>
  );
};

export default App;
