fetch("/data/offer.json")
    .then(response => response.json())
    .then(offerProducts => {
        newOfferProducts(offerProducts);
    });

const offerProducts = document.getElementById("offerProducts");

const newOfferProducts = (comerce) => {


    comerce.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("divCards")

        productCard.innerHTML = `
            <article class="miniCard">
                <h2 class="titleProductOffer">${product.name}</h2>
                <img class="imgProduct" src="${product.image}" alt="">
                <div class="newOffer">
                    <p class="priceOffer"> USD $${product.price} </p>
                    <p class="discount"> ${product.offer}</p>
                </div>
                <label class="quantityOfProducts" for="">
                    <form class="quantityOfProducts">
                        <p class="oldPrice"> USD $${product.oldPrice}</p>
                        <input class="numberInput" id="buying" type="number">
                        <input type="submit" class="btnBuy" id="btnB" value="Buy"></input>
                    </form>
                </label>
            </article>
        `

        offerProducts.append(productCard)
    });


};


let amount = document.getElementById("buying");
let btnBuy = document.querySelector("#btnB")

