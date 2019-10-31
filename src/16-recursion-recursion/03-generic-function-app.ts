import { print } from "introcs";
import { Node, cons, first, rest } from "introcs/list";

export let main = async () => {
    let strings = cons("foo", cons("bar", null));
    print("strings includes bar " + includesString(strings, "bar"));

    let numbers = cons(110, cons(401, null));
    print("numbers includes 550 " + includesNumber(numbers, 550));
};

let includes = (list: Node<string>, search: string): boolean => {
    if (list === null) {
        return false;
    } else if (first(list) === search) {
        return true;
    } else {
        return includes(rest(list), search);
    }
};

let includesString = (list: Node<string>, search: string): boolean => {
    if (list === null) {
        return false;
    } else if (first(list) === search) {
        return true;
    } else {
        return includesString(rest(list), search);
    }
};

let includesNumber = (list: Node<number>, search: number): boolean => {
    if (list === null) {
        return false;
    } else if (first(list) === search) {
        return true;
    } else {
        return includesNumber(rest(list), search);
    }
};

main();