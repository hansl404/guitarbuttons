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
    let daysWithPrecipitation: WeatherRow[] = [];

    /* TODO: assign the number of days with precipitation to variable */
    let countPrecipitation = 0;

    /* TODO: map days with precipitation to array of precipitation amount */
    let precipitation: number[] = [];

    /* TODO: reduce the precipitation amounts via a sum */
    let sumPrecipitation = 0;

    /* TODO: reduce the precipitation amounts via a max */
    let maxPrecipitation = 0;

    print("Days with Precipitation:" + countPrecipitation);
    print("Total Precipitation:" + sumPrecipitation);
    print("Max Precipitation:" + maxPrecipitation);

    /* TODO: Print the days where the max precipitation was recorded */
    print("Dates with record precipitation:");

};

main();