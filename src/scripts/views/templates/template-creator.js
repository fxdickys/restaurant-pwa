import CONFIG from "../../globals/config";

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <div class="restaurant-item_header">
            <img class="restaurant-item_header_poster" alt="${restaurant.name}"
                 src="${
                   restaurant.pictureId
                     ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
                     : "https://picsum.photos/id/666/800/450?grayscale"
                 }">
            <div class="restaurant-item_header_rating">
                 <p>⭐️<span class="restaurant-item__header__rating__score">${
                   restaurant.rating
                 }</span></p> 
            </div>
        </div>

        <div class="restaurant-item_content">
            <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <h4 class="roboto"><span class="fa-solid fa-location-dot" style="color: #ff0000;"></span> ${
              restaurant.city
            }</h4>
        </div>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail-restaurant">
      <div class="detail-restaurant-header">
            <img class="detail-restaurant-header_poster" alt="${
              restaurant.name
            }"
                 src = "${
                   restaurant.pictureId
                     ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
                     : "https://picsum.photos/id/666/800/450?grayscale"
                 }">
            
            <h3>${restaurant.name}</h3>
      </div>

      <div class="detail-restaurant-container">
          <h2><span>⭐️</span>${restaurant.rating}</h2>
          
          <div class="detail-restaurant-container_alamat">
            <span class="fa-solid fa-location-dot" style="color: #ff0000;"></span> 
            <h2 class="inline">${restaurant.city}</h2>
            <h4 class="roboto">${restaurant.address}</h4>
          </div>

          <div class="detail-restaurant-container_description">
            <h2>Deskripsi Restaurant</h2>

            <h4 class="roboto">${restaurant.description}</h4>
          </div>

          <div class="detail-restaurant-container_menu">
            <h2>Menu yang tersedia</h2>

            <div class="detail-restaurant-container__jenis">
              <div class="detail-restaurant-container__jenis_makan">
                <h3 class="garisBawah">Menu Makanan</h3>

                <ul class="roboto">
                  ${restaurant.menus.foods
                    .map((food) => `<li>${food.name}</li>`)
                    .join("")}
                </ul>
              </div>

              <div class="detail-restaurant-container__jenis_minum">
                <h3 class="garisBawah">Menu Minuman</h3>
                <ul class="roboto">
                  ${restaurant.menus.drinks
                    .map((drink) => `<li>${drink.name}</li>`)
                    .join("")}
                </ul>

              </div>
            </div>
          </div>
      </div>
    </div>
  `;

const createReviewDetail = (review) => `
    <div class="detail-review_cust card"> 
      <div class="detail-review_cust_head">    
        <h3 class="roboto00">${review.name} </h3>
        <h4 class="roboto01">${review.date} </h4><br>
      </div>

      <div class="detail-review-cust-detail">
        <h4 class="roboto">${review.review} </h4>
      </div>
    </div>
 `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createReviewDetail,
};

// ${restaurant.customerReviews
//   .map(
//     (review) =>
//       `<div class="detail-restaurant-container_review_dtl card">
//     <h3 class="roboto">${review.name}</h3>
//     <h4 class="roboto">${review.review}</h4>
//   </div>
//   `
//   )
//   .join("")}
