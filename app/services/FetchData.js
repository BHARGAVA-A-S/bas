const URI = 'https://cw-tech.herokuapp.com/feed.json';

export default {
  async fetchData() {
    try {
      let response = await fetch(URI);
      let responseJsonData = await response.json();
      Console.log(responseJsonData);
    } catch (e) {
      Console.log(e);
    }
  },
};
