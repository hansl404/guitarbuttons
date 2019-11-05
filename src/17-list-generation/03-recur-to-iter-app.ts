import { print } from "introcs";
import { Node, cons, first, rest } from "introcs/list";

export let main = async () => {
    let small = 3;
    let big = 5;
    // Recursive Sum
    print("Recursive:");
    print(sumR(big, small));
    print(sumR(small, big));
    // Iterative Sum
    print("Iterative:");
    print(sumI(small, big));
    print(sumI(big, small));
};

let sumI = (a: number, b: number): number => {
    let result = 0;
    // TODO
    return result;
};

// Example Recursive sum Implementation
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