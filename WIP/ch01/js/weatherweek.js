const temperature =[{day: 'Monday', high: 80,low: 67},
                    {day: 'Tuesday', high: 90,low: 70},
                    {day: 'Thursday', high: 65,low: 54},
                    {day: 'Friday', high: 60,low: 50}];

let lowest = temperature[0];
let highest=temperature[0];

temperature.forEach(element => {
    if(lowest.low> element.low){
        lowest = element;
    }
    if (highest.high < element.high){
        highest = element
    }
});

console.log(`The lowest temperature this week was on ${lowest.day} and it was ${lowest.low}`);
console.log(`The highest temperature this week was on ${highest.day} and it was ${highest.high}`);