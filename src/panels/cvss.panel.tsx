import { PagePath } from "../components/page-path";

export const CVSSPanel = () => {
  return (
    <div className="p-4">
      <PagePath root="/" rootName="Home" panel="cvss" />
      CVSS Panel
    </div>
  );
};
