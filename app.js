/**
 * *Destructuring en objetos tipo js
 * Es una forma de descomponer el objeto en variables.
 * 
 * ?Reglas para su uso
 * objeto ejemplo:
 * const persona = {name: "Mike", age: 27}
 * 
 * const {name} = persona;
 * !importante, las variables se deben llemar igual que la key del objeto.
 */

/**
 const album = {
     title: "breach",
     artist: "twenty one pilots",
     tracks: ["drag path", "rawfear", "robot voices"],
     raiting: {
         rate: 5,
         count: 200,
     },
 };
 
 //const {nombre(s)_atributo} = nombre_objeto_donde_salen_los_datos
 let { title, artist, raiting, tracks} = album;
 //let title = album.title, let artist = album.artist, etc.
 console.log(title);
 console.log(artist);
 console.log(raiting);
 console.log(tracks);
 //let se usa para reasignar
 */
import { getAllProducts } from "./services/api.service.js"

//Selección de elementos
const mainEl = document.querySelector("main");
const modalEl = document.querySelector("#full-info");
const closeBtn = modalEl.querySelector("button");
const contentDiv = modalEl.querySelector(".content");
const products = await getAllProducts();

//esta función recibe un objeto que va a ser inmediatamente desestructurado
const renderProduct = ({ title, description, image, id }) => {
    const productCard = `
    <div class="card">
        <img src="${image}" class="card-img-top" alt="${description}">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <button id="info" data-id="${id}" class="btn btn-primary">View full info</button>
        </div>
    </div>
    `;
    mainEl.insertAdjacentHTML("beforeend", productCard);
};
products.map((product) => renderProduct(product));

//Función
const showInfo = function (product){
    contentDiv.innerHTML = "";
    const infoCard = `
    <div class="card" >
        <img src="${product.image}" class="card-img-top" alt="${product.description}">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">$ ${product.price}</li>
            <li class="list-group-item">${product.category}</li>
            <li class="list-group-item">${product.rating.rate}</li>
        </ul>
    </div>
    `;
    contentDiv.insertAdjacentHTML("afterbegin", infoCard);
    modalEl.showModal();
};

/**
 * *event delegation
 * Generar la escucha del evento en un contenedor padre.
 * Esta será accionada incluso en los elementos hijos.
 * Mediante el evento podemos filtrar exactamente en donde ocurrio.
 * 
 * Nota
 * En javascript y solo javascript existen los operadores
 * === y !==, son operadores estrictos
 * Evaluan valor y tipo de dato
 */

//Agregando el evento deseado a un elemento padre
mainEl.addEventListener("click", (e) => {
    e.preventDefault();
    //descartamos donde ocurrio el evento
    if (e.target.id !== "info") return;
    const productid = e.target.dataset.id;
    showInfo(products[productid - 1]);
    closeBtn.addEventListener("click", () => modalEl.close());
});


