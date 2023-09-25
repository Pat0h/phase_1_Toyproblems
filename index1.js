function demeritPoints(speed) {
    const speedLimit = 70;
    const demeritPerKm = 5;

    if (speed <= speedLimit){
        return 'Allowed';
    }
    // if speed is above speed limit 
    else {
        // excessive speed is speed used above speed limit
        const excessiveSpeed = speed - speedLimit;
        const demerit = Math.floor(excessiveSpeed / demeritPerKm);
        
        if (demerit >= 12) {
            return 'Liscence suspended';
        } else {
            
            return `Demerit: ${demerit}`;
        }
    }

}
const carSpeed =120;
const result = demeritPoints(carSpeed);
console.log(result);