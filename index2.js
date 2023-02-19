const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((response) =>{
  console.log(response);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });