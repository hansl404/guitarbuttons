import { print, csvToList } from "introcs";
import { Node, cons, first, rest, listify } from "introcs/list";

export let main = async () => {
    let numbers: Node<number> = listify(1, 2, 3, 5, 10);

    // TODO #2 - Assign to sum the result of reducing with an add function
    // TODO #4 - Assign to max the result of reducing with an greatest function
    let sum: number = 0;
    let max: number = 0;

    print("sum: " + sum);
    print("max: " + max);
};

interface Reducer<T, U> {
    (memo: U, item: T): U;
}

// TODO #1 - Write a function named add that is given two numbers
// and will return the sum of the two numbers. It is a Reducer.

// TODO #3 - Write a function named greatest that is given two numbers
// and will return the larger of the two numbers. It is a Reducer.

// == reduce ==
let reduce = <T, U> (xs: Node<T>, f: Reducer<T, U>, memo: U): U => {
    if (xs === null) {
        return memo;
    } else {
        return reduce(rest(xs), f, f(memo, first(xs)));
    }
};

main();