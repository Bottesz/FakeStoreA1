import Modell from "../Modell.js";


// azt kell megnezni hogy jo vegpont eseten jo adatot kapunk e?
function getAdatTeszt_joVegpont() {
    let vegpont = ("https://fakestoreapi.com/products");
    let vart = [{
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }
    }]



// Mukodik e getadat metodus?
let modell = new Modell();
modell.getAdat(vegpont,callbackTeszt,hibacallbackTeszt);

function callbackTeszt(adat){
console.log("Jó végponttal megerekezett az adat")

//json filet stringé alakitja
console.assert(JSON.stringify(vart)===JSON.stringify(adat[0]),"Jo vegpontal hibas adatot kaptam")
console.log("Lefutott a fetch")
}


function hibacallbackTeszt(adat){


}
getAdatTeszt_joVegpont();
}


function getAdatTeszt_NEMjoVegpont() {
    let vegpont = ("https://fakestoreapi.com/products");
    let vart = [{
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }
    }]



// Mukodik e getadat metodus?
let modell = new Modell();
modell.getAdat(vegpont,callbackTeszt,hibacallbackTeszt);

function callbackTeszt(adat){
console.log("Jó végponttal megerekezett az adat")

//json filet stringé alakitja
console.assert(JSON.stringify(vart)===JSON.stringify(adat[0]),"Jo vegpontal hibas adatot kaptam")
console.log("Lefutott a fetch")
}


function hibacallbackTeszt(adat){


}

}
getAdatTeszt_joVegpont();


function getAdatTeszt_NEMjoVegpont() {
    let vegpont = ("https://fakestoreapi.com/products");
   



// Mukodik e getadat metodus?
let modell = new Modell();
modell.getAdat(vegpont,callbackTeszt,hibacallbackTeszt);

function callbackTeszt(adat){
console.log("baj ha ide futott be , mert nem jó a végpont ")



function hibacallbackTeszt(adat){
    console.log("hiba: ",adat)

}

}
}
getAdatTeszt_joVegpont();
getAdatTeszt_NEMjoVegpont();



