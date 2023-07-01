
import axios from "axios"

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log("SUCCESS")
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("ERROR")
    console.log(error);
  })
  .finally(function () {
    // always executed
  });