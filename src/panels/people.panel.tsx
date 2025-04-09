import { PagePath } from "../components/page-path";

export const PeoplePanel = () => {
  return (
    <div className="p-4">
      <PagePath root="/" rootName="Home" panel="people" />
      People Panel
    </div>
  );
};
