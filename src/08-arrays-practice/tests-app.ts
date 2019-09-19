/** Import Test Helpers */
import { testNumber, testArray } from "./test-util";

import { indexOf, clone } from "./array-functions";

export let main = async () => {
    
    // indexOf Use Cases
    testNumber("indexOf([1, 2, 3], 1)", 0, indexOf([1, 2, 3], 1));
    testNumber("indexOf([1, 2, 3], 2)", 1, indexOf([1, 2, 3], 2));
    testNumber("indexOf([1, 2, 3], 3)", 2, indexOf([1, 2, 3], 3));
    // indexOf Edge Cases
    testNumber("indexOf([1, 2, 3], 4)", -1, indexOf([1, 2, 3], 4));
    testNumber("indexOf([1, 2, 2], 2)", 1, indexOf([1, 2, 2], 2));

    // Tests for clone function which makes a copy of an array
    // Use Cases
    let input: number[];
    let expected: number[];
    input = [99];
    expected = input;
    testArray("clone([99])", expected, clone(input));

    input = [1, 2, 3];
    expected = input;
    testArray("clone([1, 2, 3])", expected, clone(input));

    // Edge Cases
    input = [];
    expected = input;
    testArray("clone([])", expected, clone(input));

};

main();