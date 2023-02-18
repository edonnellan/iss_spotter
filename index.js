const { nextISSTimesForMyLocation /*fetchMyIP, fetchCoordsByIP,  fetchISSFlyOverTimes*/} = require('./iss');


nextISSTimesForMyLocation((error, pasttimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  console.log(pasttimes);
});


/// CODE FOR TESTING FUNCTIONS BELOW///


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("38.141.215.150", (error, data) => {
//     if (error) {
//     console.log("Sorry, it did not work!", error);
//     return;
//   }

//   console.log("Success! Coordinates are:", data);
// });


// fetchISSFlyOverTimes({ latitude: 49.2488091, longitude: -122.9805104 }, (error, arrayOfPasses) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Here is when the ISS will fly over your area:' , arrayOfPasses);
// });