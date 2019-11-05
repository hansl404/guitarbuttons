import { print } from "introcs";
import { Node, cons, first, rest } from "introcs/list";

export let main = async () => {
    print(sumI(3, 5));
    print(sumI(5, 3));
    print(sumR(3, 5));
    print(sumR(5, 3));
};

let sumI = (a: number, b: number): number => {
    let result = 0;
    if (a <= b) {
        while (a <= b) {
            result += a;
            a++;
        }
    } else {
        while (a >= b) {
            result += a;
            a--;
        }
    }
    return result;
};

let sumR = (a: number, b: number): number => {
    if (a === b) {
        return a;
    } else if (a < b) {
        return a + sumR(a + 1, b);
    } else {
        return a + sumR(a - 1, b);
    }
};

main();