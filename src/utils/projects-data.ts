export type Project = {
  id: number;
  title: string;
  client: string;
  status: "active" | "archived";
};

export const projectsData: Project[] = [
  { id: 1, title: "c1ptest1", client: "ctest1", status: "active" },
  { id: 2, title: "c2ptest1", client: "ctest2", status: "active" },
  { id: 3, title: "c3ptest1", client: "ctest3", status: "active" },
  { id: 4, title: "archivedProject1", client: "ctest4", status: "archived" },
  { id: 5, title: "archivedProject2", client: "ctest5", status: "archived" },
];
