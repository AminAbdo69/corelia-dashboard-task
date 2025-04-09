import { useState } from "react";
import { projectsData } from "../utils/projects-data";

export const useFetchProjects = () => {
  const [projects, setProjects] = useState(projectsData);
  // Todo use API to fetch data in the future...
  return { projects, setProjects };
};
