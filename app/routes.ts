import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projects", "routes/ProjectsPage.tsx"),
  route("project/:id", "routes/ProjectDetail.tsx"),
] satisfies RouteConfig;
