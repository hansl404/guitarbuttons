import { print, random } from "introcs";

class Genotype {
    alleles: string = "";
}

export let main = async () => {
    let mom = new Genotype();
    mom.alleles = "Bb";
    print("Mom");
    print(mom);

    let dad = new Genotype();
    dad.alleles = "Bb";
    print("Dad");
    print(dad);
    
    let trials = 100;
    let dominants = 0;
    print("Trials: " + trials);
    print("% of offspring with dominant allele:");

    // TODO: Write a loop that repeats trials # of times


};

let cross = (a: Genotype, b: Genotype): Genotype => {
    let aAllele = a.alleles[random(0, 1)];
    let bAllele = b.alleles[random(0, 1)];
    let child = new Genotype();
    child.alleles = aAllele + bAllele;
    return child;
};

let hasDominantAllele = (g: Genotype, letter: string): boolean => {
    return g.alleles[0] === letter || g.alleles[1] === letter;
};

main();