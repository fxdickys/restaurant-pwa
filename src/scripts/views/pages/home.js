import ListRestaurant from "../../data/restaurant-source";

const Home = {
  async render() {
    return `<h2>List of Restaurant </h2>`;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurant = await ListRestaurant.home();
    console.log("test");
    console.log(restaurant);
  },
};

export default Home;
