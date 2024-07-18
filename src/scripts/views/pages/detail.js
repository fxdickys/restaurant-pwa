import UrlParser from "../../routes/url-parser";
import ListRestaurant from "../../data/restaurant-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
      <div class="detail">
        <h2 class="detail_heading">Detail of Restaurant </h2>
        <div id="dtl_restaurant" class="dtl_restaurant">
        </div>
      </div>
      `;
  },
  // <h2>Detail page</h2>

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const restaurant = await ListRestaurant.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector("#dtl_restaurant");
    const test = createRestaurantDetailTemplate(restaurant);
    console.log(test);

    restaurantContainer.innerHTML = test;
  },
};

export default Detail;
