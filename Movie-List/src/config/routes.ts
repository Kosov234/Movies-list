import IRoute from "../interfaces/route";
import AdvancedSearch from "../pages/advancedSearch";
import HomePage from "../pages/home";
import MoviePage from "../pages/movie";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
  {
    path: "/advanced_search",
    name: "Advanced Search",
    component: AdvancedSearch,
    exact: true,
  },
  {
    path: "/movies/:imdbID",
    name: "Movie Page",
    component: MoviePage,
    exact: true,
  },
];

export default routes;
