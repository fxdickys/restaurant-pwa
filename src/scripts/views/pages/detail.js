import UrlParser from "../../routes/url-parser";
import ListRestaurant from "../../data/restaurant-source";
import {
  createRestaurantDetailTemplate,
  createReviewDetail,
  createRestaurantAdd,
  dtl_review_add,
} from "../templates/template-creator";

const Detail = {
  async render() {
    return `
      <div class="detail">
        <h2>Detail of Restaurant </h2>
        <div id="dtl_restaurant" class="dtl_restaurant"></div>

        <div id="dtl_review" class="dtl_review">
          <h2>Review</h2>
          <div id="dtl_review_add" class="dtl_review_add"> </div>
          <div id="dtl_review_cust" class"dtl_review_cust"> </div>

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
    restaurantContainer.innerHTML = test;

    const restaurantAdd = document.querySelector("#dtl_review_add");
    const textAdd = createRestaurantAdd(restaurant);
    restaurantAdd.innerHTML = textAdd;

    const restaurantReview = document.querySelector("#dtl_review_cust");
    restaurantReview.innerHTML = restaurant.customerReviews
      .map((review) => createReviewDetail(review))
      .join("");

    const submitReview = document.querySelector(".form-submit");
    submitReview.addEventListener("click", async () => {
      const nama = document.querySelector("#nama");
      console.log(restaurant.name);
      console.log(nama.value);
    });
  },
};

export default Detail;
