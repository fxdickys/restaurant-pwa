import API_ENDPOINT from "../globals/api-endpoint";

class ListRestaurant {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJSON = await response.json();

    return responseJSON.restaurants;
  }

  static async reviewRestaurant(id) {
    const
  }
  
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }
}

export default ListRestaurant;
