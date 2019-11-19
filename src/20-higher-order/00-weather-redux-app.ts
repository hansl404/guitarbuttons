import { print, csvToArray } from "introcs";

class WeatherRow {
    date: string = "";
    precipitation: number = 0;
    snow: number = 0;
    tempHigh: number = 0;
    tempLow: number = 0;
}

let main = async () => {
    let data = await csvToArray("Select Data File", WeatherRow);

    /* TODO: filter data by days where precipitation > 0 */
    let daysWithRain: WeatherRow[] = [];

    /* TODO: assign the number of days with precipitation to variable */
    let countRain = 0;

    /* TODO: map days with precipitation to array of precipitation amount */
    let rain: number[] = [];

    /* TODO: reduce the precipitation amounts via a sum */
    let sumRain = 0;

    /* TODO: reduce the precipitation amounts via a max */
    let maxRain = 0;

    print("Days with Rain:" + countRain);
    print("Total Rain:" + sumRain);
    print("Max Rain:" + maxRain);

    /* TODO: Print the days where the max precipitation was recorded */
    print("Dates with record rain:");

};

main();