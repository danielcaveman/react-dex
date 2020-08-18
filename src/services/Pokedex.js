import axios from "axios";

const APIURL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";

export class Pokedex {
  async getPokemons(callback) {
    let instance = {
      method: "GET",
      url: APIURL,
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };
    try {
      await axios(instance).then(function (response) {
        callback(response.data.results);
      });
    } catch (error) {}
  }
}
