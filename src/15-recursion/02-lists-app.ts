import { print } from "introcs";

import { cons, first, rest, Node } from "introcs/list";

export let main = async () => {

    let list = cons("N", cons("C", null));
    print("list: " + list);

    // TODO: cons U onto list
    list = cons("U", list);
    print("list: " + list);

    // TODO: Print the 2nd and 3rd Values

};

main();