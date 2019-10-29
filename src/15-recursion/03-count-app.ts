import { print } from "introcs";
import { Node, cons, first, rest } from "introcs/list";

export let main = async () => {
    
    // Establish a List of values
    let names: Node<string> = cons("Rameses", cons("Roy", null));
    print("names: " + names);

    // Print the number of values in the List
    print("The number of names in the list is...");
    print(count(names));

};

// TODO
let count = <T> (list: Node<T>): number => {
    return 0;
};

main();