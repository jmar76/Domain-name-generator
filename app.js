
let pronoun = ["the", "our", "beautiful", "dog"];
let adj = ["great", "big", "sonora", "lacust"];
let noun = ["jogger", "racon", "lunch", "cheap"];
let dominium = [".com", ".es", ".net", ".us", ".edu", ".shop", ".online"];



function imprimirMiDominio() {

    for (let m = 0; m < pronoun.length; m++) {
        for (let n = 0; n < adj.length; n++) {
            for (let i = 0; i < noun.length; i++) {
                for (let x = 0; x < dominium.length; x++) {
                    let str = pronoun[m] + adj[n] + noun[i] + dominium[x];
                    console.log(str);
                }
            }
        }
    }
}
imprimirMiDominio();