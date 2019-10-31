import { print } from "introcs";
import { Node, cons, first, rest } from "introcs/list";

export let main = async () => {
    let names = cons("Michael", cons("Jordan", null));
    print("Names: " + names);

    print("Acronymified: " + acronymify(names));
};

let acronymify = (list: Node<string>): Node<string> => {
    return null;
};

main();