import { print } from "introcs";

import { cons, first, rest, Node } from "introcs/list";

export let main = async () => {

    // A list keeps track of its first node
    let list: Node<string> = cons("C", null);
    print("list: " + list);

    // TODO: cons U onto a new list

    print("list: " + list);

    // TODO: Print the 2nd and 3rd Values

};

main();