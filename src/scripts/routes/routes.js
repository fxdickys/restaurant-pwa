import Home from "../views/pages/home.js";
import Favorite from "../views/pages/favorite.js";
import Detail from "../views/pages/detail.js";
import AboutUs from "../views/pages/aboutus.js";

const routes = {
  "/": Home, //default page
  "/favorite": Favorite,
  "/aboutus": AboutUs,
  "/detail/:id": Detail,
};

export default routes;

// "/favorite": Favorite,
// "/aboutus": AboutUs,
// "/detail/:id": Detail,
