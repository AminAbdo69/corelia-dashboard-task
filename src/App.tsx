import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar className="w-50 h-screen bg-white  shadow-sm" />

      <div className="flex-1 flex flex-col pl-1">
        <Header />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard Content
          </h1>
        </main>
      </div>
    </div>
  );
};

export default App;
