import { PagePath } from "../components/page-path";
import { PanelId } from "../utils/panel-ids";

interface DefaultPanelProps {
  id: PanelId;
  title: string;
}

export const DefaultPanel: React.FC<DefaultPanelProps> = ({ id, title }) => {
  return (
    <div>
      <PagePath root="/" rootName="Home" panel={id} />
      <h1 className="text-2xl font-bold mb-8">{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad unde,
        excepturi ducimus fuga reprehenderit quidem nostrum sit commodi facere
        consequuntur soluta quae, libero animi aspernatur voluptatum temporibus
        asperiores. Obcaecati?
      </p>
    </div>
  );
};
