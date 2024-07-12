import Home from "../views/pages/home.js";

const routes = {
  "/": Home,
  "/favorite": Favorite,
  "/aboutus": AboutUs,
  "/detail/:id": Detail,
};

export default routes;
