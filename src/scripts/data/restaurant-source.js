import API_ENDPOINT from "../globals/api-endpoint";

class ListRestaurant {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJSON = await response.json();

    return responseJSON.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default ListRestaurant;
