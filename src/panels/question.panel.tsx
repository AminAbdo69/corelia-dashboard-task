import { PagePath } from "../components/page-path";

export const QuestionsPanel = () => {
  return (
    <div className="p-4">
      <PagePath root="/" rootName="Home" panel="questions" />
      Questions Panel
    </div>
  );
};
