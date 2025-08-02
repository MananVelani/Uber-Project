const rideModel = require("../models/ride.model");
const mapService = require("../services/maps.service");
const crypto = require('crypto')

async function getFare(pickup,destination){
    if(!pickup || !destination) {
        throw new Error("Pickup and destination are required to calculate fare");
    }

    pickupCoord = await mapService.getAddressCoordinate(pickup);
    destinationCoord = await mapService.getAddressCoordinate(destination);

    const distanceTime = await mapService.getDistanceTime(pickupCoord, destinationCoord);
    const { distance, duration } = distanceTime;

    // example fare calculation logic (values can be adjusted as needed)
    const baseFares = {
        auto: 30,
        car: 50,
        moto: 20
    };
    const perKmRates = {
        auto: 10,
        car: 15,
        moto: 8
    };
    const perMinRates = {
        auto: 2,
        car: 3,
        moto: 1.5
    };


    const fares = {};
    for (const type of Object.keys(baseFares)) {
        fares[type] =
            Math.round(baseFares[type] +
            perKmRates[type] * (distance / 1000) +
            perMinRates[type] * (duration / 60));
    }

    return fares;

}

module.exports.getFare = getFare;

function getOtp(num ){
    const otp = crypto.randomInt(Math.pow(10, num-1 ),Math.pow(10,num)).toString();
    return otp;
}

module.exports.createRide = async ({ 
    user,pickup,destination,vehicleType
   }) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error("All fields are required");
    }
    const fare = await getFare(pickup, destination);
    const ride = new rideModel({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType],
    });

    await ride.save();
    return ride;
}

module.exports.confirmRide = async ({ rideId,captain }) => {
    if (!rideId) {
        throw new Error("Ride ID is required");
    }

    await rideModel.findOneAndUpdate(
        { _id: rideId },
        {
            status: 'accepted',
            captain:captain._id, 
        });

    const ride = await rideModel.findOne({
        _id: rideId,
    }).populate( 'user').populate('captain').select('+otp');

    if (!ride) {
        throw new Error("Ride not found");
    }

    ride.status = 'accepted';

    await ride.save();

    return ride;
}


module.exports.startRide = async ({ rideId, otp, captain }) => {
    if (!rideId || !otp) {
        throw new Error("Ride ID and OTP are required");
    }

    const ride = await rideModel.findOne({ _id: rideId, otp }).populate('user').populate('captain').select('+otp');

    if (!ride) { 
        throw new Error("Invalid ride ID or OTP");
    }

    if (ride.status !== 'accepted') {
        throw new Error("Ride not accepted");
    }

    if(ride.otp !== otp) {
        throw new Error("Invalid OTP");
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'ongoing',
    })

    return ride;
}


module.exports.endRide = async ({rideId , captain}) => {
    if (!rideId ) {
        throw new Error("Ride ID is required");
    }

    const ride = await rideModel.findOne({ 
        _id: rideId ,
        captain:captain._id
    }).populate('user').populate('captain');

    if (!ride) { 
        throw new Error("Invalid ride ID ");
    }

    if (ride.status !== 'ongoing') {
        throw new Error("Ride not ongoing");
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'completed',
    })

    return ride;


}