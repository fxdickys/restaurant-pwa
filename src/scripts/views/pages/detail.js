import UrlParser from "../../routes/url-parser";
import ListRestaurant from "../../data/restaurant-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant">
        </div>
      `;
  },
  // <h2>Detail page</h2>

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await ListRestaurant.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
