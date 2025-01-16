import HomePage from "@/HomePage";
import ProjectPage from "@/ProjectPage";

export const routes = [
  {
    path: "/",
    element: HomePage,
    name: "Home",
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