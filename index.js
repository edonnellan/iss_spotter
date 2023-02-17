// index.js
const { fetchMyIP, /*fetchCoordsByIP*/ } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

// fetchCoordsByIP("38.141.215.150", (error, data) => {
//     if (error) {
//     console.log("Sorry, it did not work!", error);
//     return;
//   }

//   console.log("Success! Coordinates are:", data);
// });