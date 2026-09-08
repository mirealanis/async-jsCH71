/**
 * Promesas escritas
 * 1. resolve, el caso de exito (caso en el que la promesa 
 * se resuelve de manera favorable)
 * 2. reject, el caso de fracaso (caso en el que la promesa
 * se resuelve de manera no favorable)
 * !importante
 * Al crear una promesa esta debe de ser retornada a una
 * función.
 */

//Crear una promesa
function waitNSeconds(seconds) {
    console.log("Primer Console log dentro de la función");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const state = true;
            if (state) {
                resolve("La petición fue exitosa")
            }else{
                reject("La petición fracaso");
            }
        }, seconds * 1000);
    });
};

waitNSeconds(2).then((response) => {
    console.log("Caso resolve ");
    console.log(response);
}).catch((error) => {
    console.log("Caso reject ");
    console.log(error);
})

console.log("Segundo console");
console.log("Tercer console");
console.log("Cuarto console");
