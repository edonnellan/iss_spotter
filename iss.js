/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require("request");


const fetchMyIP = (callback) => {
  const url = "https://api.ipify.org?format=json";

  // use request to fetch IP address from JSON API
  request.get(url, (error, response, body) => {
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    if (error) {
      callback(error, null);
      return;

    } else {

      let ipAddress = JSON.parse(body);
      ipAddress = ipAddress.ip;
      callback(null, ipAddress);
      // fetchCoordsByIP(ipAddress, callback);
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {
  const url = `http://ipwho.is/${ip}`;

  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    // if (response !== 200) {
    //   const errMess = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    //   callback(Error(errMess), null);
    // }
    
    const bodyObj = JSON.parse(body);
    
    if (!bodyObj.success) {
      const msg = `Success status was ${bodyObj.success}. Server message says: ${bodyObj.message} when fetching for IP ${bodyObj.ip}`;
      callback(Error(msg), null);
      return;
    }
    
    const latitude = bodyObj.latitude;
    const longitude = bodyObj.longitude;
    const longLatObj = {"latitude": latitude, "longitude": longitude};

    callback(null, longLatObj);

  });
};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = function(coords, callback) {
  const url = "https://iss-flyover.herokuapp.com/json/?lat=49.2488091&lon=-122.9805104";
  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    let flyTimes = JSON.parse(body).response;
    // console.log("flytime:", flyTimes);

    callback(null, flyTimes);

  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };