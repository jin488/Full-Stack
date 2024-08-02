fetch("/data/offer.json")
    .then(response => response.json())
    .then(offerProducts => {
        newOfferProducts(offerProducts);
    });

const offerProducts = document.getElementById("offerProducts");

const newOfferProducts = (comerce) => {
    

        comerce.forEach(product => {
            const productCard = document.createElement("div");

            productCard.innerHTML = `
            <article class="miniCard">
                <h2 class="titleProductOffer">${product.name}</h2>
                <img class="imgProduct" src="${product.image}" alt="">
                <div>
                <p class="priceOffer"> USD $${product.price} </p>
                <p class="discount"> ${product.offer}</p>
                </div>
                <p class="oldPrice"> USD $${product.oldPrice}</p>
            </article>
        `

            offerProducts.append(productCard)
        });
};
