const axios = require('axios');
const { listIndexes } = require('../models/user.model');
const captainModel = require("../models/captain.model");

module.exports.getAddressCoordinate = async (address) => {
  try {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://api.openrouteservice.org/geocode/search?api_key=${process.env.ORS_API_KEY}&text=${encodedAddress}`;

    const response = await axios.get(url);

    if (
      response.data &&
      response.data.features &&
      response.data.features.length > 0
    ) {
      const coords = response.data.features[0].geometry.coordinates;
      return {
        lng: coords[0],
        ltd: coords[1],
 
      };
    } else {
      throw new Error('No results found for the given address');
    }
  } catch (error) {
    throw new Error('Error fetching coordinates: ' + error.message);
  }
};

// Get distance and time between two coordinates using ORS Directions API
module.exports.getDistanceTime = async (start, end) => {

  if(!start || !end){
    throw new Error('Origin and Destination are required!');
  }

  try {
    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.ORS_API_KEY}`;
    const body = {
      coordinates: [
        [start.lng, start.ltd],
        [end.lng, end.ltd]
      ]
    };

    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });


    if (
      response.data &&
      response.data.routes &&
      response.data.routes.length > 0
    ) {
      const summary = response.data.routes[0].summary;
      return {
        distance: summary.distance, // in metres
        duration: summary.duration  // in seconds
      };
    } else {
      throw new Error('No route found between the given coordinates');
    }
  } catch (error) {
    throw new Error('Error fetching distance and time: ' + error.message);
  }
};


module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error('query is required');
  }

  try {
    const encodedInput = encodeURIComponent(input);
    const url = `https://api.openrouteservice.org/geocode/autocomplete?api_key=${process.env.ORS_API_KEY}&text=${encodedInput}&size=5`;

    const response = await axios.get(url);

    if (
      response.data &&
      response.data.features &&
      response.data.features.length > 0
    ) {

      // Return an array of suggestion strings (labels)
      return response.data.features.map(feature => ({
        label: feature.properties.label,
        coords: feature.geometry.coordinates
      }));
    } else {
      return [];
    }
  } catch (error) {
    throw new Error('Error fetching autocomplete suggestions: ' + error.message);
  }
};

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
 const captains = await captainModel.find({
  location: {
    $geoWithin: {
      $centerSphere: [ [ ltd, lng ], radius / 6371 ]
    }
  }
});

return captains;

};