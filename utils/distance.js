function getDistance(latitude1, longitude1, latitude2, longitude2){
    const radius = 6371;
    const toRadius = deg => deg * Math.PI / 180 ;

    const dLatitude = toRadius(latitude2 - latitude1);
    const dLongitude = toRadius(longitude2 - longitude1);

    const a = Math.sin(dLatitude / 2) * Math.sin(dLatitude / 2) + Math.cos(toRadius(latitude1)) * Math.cos(toRadius(latitude2)) * Math.sin(dLongitude / 2) * Math.sin(dLongitude / 2);

    const c = 2 * Math.atan2(Math.sqrt(a) , Math.sqrt(1-a));
    return radius * c ;
}

module.exports = getDistance;