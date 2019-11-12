import { print, csvToList } from "introcs";
import { Node, cons, first, rest, listify } from "introcs/list";

export let main = async () => {
    let numbers: Node<number> = listify(1, 2, 3, 5, 11);

    // TODO #2 - Assign to squares the result of calling map with
    // the numbers List and the square function you wrote below.
    let squares: Node<number> = null;

    print(numbers);
    print("Squared:");
    print(squares);
};

/**
 * Transform is any function that takes a single value and 
 * returns another value.
 */
interface Transform<T, U> {
    (item: T): U;
}

// TODO #1: Define a function named square
// It should take in a number as a parameter and return a number
// The number it returns should be the input value squared

/**
 * Given a list of values, map will return a new list of values with
 * the function f applied to every element in the original list.
 */
let map = <T, U> (xs: Node<T>, f: Transform<T, U>): Node<U> => {
    if (xs === null) {
        return null;
    } else {
        return cons(f(first(xs)), map(rest(xs), f));
    }
};

main();