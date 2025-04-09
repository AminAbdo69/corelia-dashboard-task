import { useMemo, useState } from "react";
import { projectsData } from "../utils/projects-data.ts";
import { Button } from "../components/ui/button";
import { Download, Search } from "../assets/icons";
import { PagePath } from "../components/page-path/index.ts";

export const ProjectsPanel = () => {
  const [selectedTab, setSelectedTab] = useState<"active" | "archived">(
    "active"
  );
  const [projects, setProjects] = useState(projectsData);

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.status === selectedTab),
    [projects, selectedTab]
  );

  const handleChangeProjectState = (projectId: number) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              status: selectedTab === "active" ? "archived" : "active",
            }
          : project
      )
    );
  };

  return (
    <div className="p-4 space-y-4 ">
      <PagePath root="/" rootName="Home" panel="projects" />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="w-60 bg-white relative ">
          <input
            type="text"
            placeholder=" search  "
            className="w-full pl-8  py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Search className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 " />
        </div>
      </div>

      <div className="flex justify-between items-center ">
        <div className="flex overflow-hidden rounded-lg border border-gray-200">
          <Button
            isActive={selectedTab === "active"}
            className="rounded-none border-none"
            onClick={() => setSelectedTab("active")}
          >
            Active
          </Button>
          <Button
            isActive={selectedTab === "archived"}
            className="rounded-none border-none"
            onClick={() => setSelectedTab("archived")}
          >
            Archive
          </Button>
        </div>
        <Button isActive={true}>Create Project</Button>
      </div>

      <div className="overflow-x-auto bg-white rounded-t shadow-sm border border-gray-200">
        <table className="table-auto min-w-full ">
          <thead className="bg-gray-200/10 ">
            <tr>
              <th className="w-60 mx-auto py-3 text-center text-base font-medium text-gray-500 ">
                Title
              </th>
              <th className="w-60 py-3 text-center text-base font-medium text-gray-500">
                Client
              </th>
              <th className="py-3 text-end pr-36 text-base font-medium text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id} className="border-t border-gray-500/15">
                <td className="w-60 py-3 text-center text-sm  text-gray-500">
                  {project.title}
                </td>
                <td className="w-60 py-5 text-center text-sm   text-gray-500">
                  {project.client}
                </td>
                <td className="py-3 pr-2 flex justify-end items-center gap-3 text-center text-sm   text-gray-500 ">
                  <Button isActive={false} className="text-sm">
                    Details
                  </Button>
                  <Button isActive={false} className="text-sm  ">
                    <div className="flex justify-center ">
                      <Download className="w-5 h-5" /> Download
                    </div>
                  </Button>
                  <Button
                    isActive={false}
                    className="text-sm"
                    onClick={() => handleChangeProjectState(project.id)}
                  >
                    {selectedTab === "active" ? "Archive" : "Unarchive"}
                  </Button>
                </td>
              </tr>
            ))}
            {filteredProjects.length === 0 && (
              <tr>
                <td colSpan={3} className="p-4 text-center text-gray-500">
                  No {selectedTab} projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsPanel;
