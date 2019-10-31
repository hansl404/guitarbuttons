import { print } from "introcs";
import { Node, cons, first, rest } from "introcs/list";

export let main = async () => {
    let names = cons("Kevin Guskiewicz", cons("Kevin Bacon", cons("Roy", null)));
    print("Names: " + names);

    print("Kevin Bacon is in the names list...");
    print(includes(names, "Kevin Bacon"));
};

// TODO: Implement the includes Function
let includes = (list: Node<string>, search: string): boolean => {
    if (list === null) {
        return false;
    } else if (first(list) === search) {
        return true;
    } else {
        return includes(rest(list), search);
    }
};

main();