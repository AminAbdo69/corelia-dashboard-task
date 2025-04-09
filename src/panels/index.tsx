import { PanelId } from "../utils/panel-ids";

import { ClientsPanel } from "./client.panel";
import { ProjectsPanel } from "./project.panel";
import { PeoplePanel } from "./people.panel";
import { VRTSGlobalPanel } from "./vrtsglobal.panel";
import { VRTSInternalPanel } from "./vrtsinternal.panel";
import { QuestionsPanel } from "./question.panel";
import { CVSSPanel } from "./cvss.panel";

export const panels: Record<PanelId, React.ReactNode> = {
  clients: <ClientsPanel />,
  projects: <ProjectsPanel />,
  people: <PeoplePanel />,
  "vrts-global": <VRTSGlobalPanel />,
  "vrts-internal": <VRTSInternalPanel />,
  questions: <QuestionsPanel />,
  cvss: <CVSSPanel />,
};
