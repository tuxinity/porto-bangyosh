import HomePage from "@/HomePage";
import ProjectPage from "@/ProjectPage";
import IndiePage from "@/IndiePage";

export const routes = [
  {
    path: "/",
    element: HomePage,
    name: "Home",
  },
  {
    path: "/indie-project",
    element: IndiePage,
    name: "Indie Project",
  },
  {
    path: "/projects",
    children: [
      {
        path: "",
        element: HomePage,
        name: "Projects",
      },
      {
        path: ":id",
        element: ProjectPage,
        name: "Project Detail",
      },
    ],
  },
] as const;

