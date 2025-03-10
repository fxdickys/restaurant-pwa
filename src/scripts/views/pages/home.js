import ListRestaurant from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content_heading">List of Restaurant </h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>`;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await ListRestaurant.home();
    const restaurantContainer = document.querySelector("#restaurants");

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
