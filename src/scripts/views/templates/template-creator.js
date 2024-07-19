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
            <h4><span class="fa-solid fa-location-dot" style="color: #ff0000;"></span> ${
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
          <h2>⭐️<span class="detail-restaurant-container_rating">${
            restaurant.rating
          }</h2>
          
          <div class="detail-restaurant-container_alamat">
            <h3><span class="fa-solid fa-location-dot" style="color: #ff0000;"></span> ${
              restaurant.city
            }</h3>
            <h4>${restaurant.address}</h4>
          </div>
            
      </div>
    </div>
  `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
