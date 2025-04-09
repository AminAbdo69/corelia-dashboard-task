import { PanelId } from "../../../utils/panel-ids";

interface PagePathProps {
  root: string;
  rootName: string;
  panel: PanelId;
}

export const PagePath: React.FC<PagePathProps> = ({
  root,
  rootName,
  panel,
}) => {
  return (
    <div className="mb-8 text-gray-600">
      <a href={root} className="hover:underline">
        {rootName}
      </a>{" "}
      / <span>{panel}</span>
    </div>
  );
};
