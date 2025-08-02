const mapService = require("../services/maps.service")
const { validationResult } = require('express-validator')

module.exports.getCoordinates = async (req,res,next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }



    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.getDistanceTime = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { origin, destination } = req.query;

  try {
    const originCoords = await mapService.getAddressCoordinate(origin);
    const destCoords = await mapService.getAddressCoordinate(destination);


    const { distance, duration } = await mapService.getDistanceAndTime(originCoords, destCoords);
    res.status(200).json({ distance, duration });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.getAutoCompleteSuggestions = async (req,res,next) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        res.status(200).json(suggestions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}