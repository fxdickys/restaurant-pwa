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
            <i class="fa-solid fa-location-dot">test</i>
            <h4>${restaurant.city}</h4>
        </div>
    </div>
`;

export { createRestaurantItemTemplate };
