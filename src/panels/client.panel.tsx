import { PagePath } from "../components/page-path";

export const ClientsPanel = () => {
  return (
    <div className="p-4">
      <PagePath root="/" rootName="Home" panel="clients" />
      Clients Panel
    </div>
  );
};
