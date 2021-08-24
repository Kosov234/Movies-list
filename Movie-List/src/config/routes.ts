import AdvancedSearch from "../pages/AdvancedSearch/advancedSearch";
import HomePage from "../pages/Home/home";
import MoviePage from "../pages/Movie/movie";

export interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
}

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
