/**
 * Un servicio es un tipo de archivo
 * donde vamos a tenr funciones o clase con sus metodos que
 * ejecutan acciones.
 * 
 * !SUPER IMPORTANTE
 * !TODAS las funciones asincronas retornan una promesa
 * !No importa que pienses tú qué está retornando
 * !SIEMPRE es una PROMESA
 * 
 * NOTA:
 * La api fetch como el navegador declara por defecto get
 */

//importamos la variable de env.js
import { API_URL } from "../env.js";

//*Peticiones
//?GET todos los productos (Usando function expresion)
export async function getAllProducts() {
    //1. Lanzar la petición
    const response = await fetch(API_URL);
    const data = await response.json(); //json diseñado para promesas
    return data;
}

//GET 1 solo producto
export const getSingleProduct = async function (id) {
    try {
        //fetch hace la petición
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
};

//POST (con arrow function)
export const createProduct = async (productObject) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productObject),
        });
        const data = await response.json();
        return data;

    } catch (error) {
        console.log("Error: ", error);
    }
};

createProduct({
    title: "Jabon Dove",
    price: 35,
    description: "Jabon de tocador Dove neutro",
    category: "cuidado personal",
    image: "http://example.com"
});

//PUT
export const updateProduct = async (id, product) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
};

updateProduct(5, {
    title: "Loratadina 10mg",
    price: 21,
    //description: "Medicamento",
    category: "Farmacia",
    image: "http://example.com"
});

//DELETE
export const deleteProduct = async function (id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

deleteProduct(1);
