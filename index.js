// Code your solution in this file!

function distanceFromHqInBlocks(location){
    const blocks = (((location -42))**2)**0.5;
    return blocks;
    }
    function distanceFromHqInFeet(location){
        const blocks = (((location -42))**2)**0.5;
        const feet = blocks * 264;
        return feet;
    }
    function distanceTravelledInFeet(pickUp, dropOff){
        const blocks = (((pickUp - dropOff))**2)**0.5;
        const feet = blocks * 264;
        return feet;
    }
    function calculatesFarePrice(pickUp, dropOff){
        const blocks = (((pickUp - dropOff))**2)**0.5;
        const feet = blocks * 264;
        let fare;
        switch (true) {
            case feet <= 400:
                return 0;
            case feet > 400 && feet <= 2000:
                fare = (2 * (feet - 400)) / 100;
                return fare;
            case feet > 2000 && feet <= 2500:
                return 25;
            default:
                return 'cannot travel that far';
        }
        
    }