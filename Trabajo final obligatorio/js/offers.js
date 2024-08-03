fetch("/data/offer.json")
    .then(response => response.json())
    .then(offerProducts => {
        newOfferProducts(offerProducts);
        errorBuy(offerProducts)
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
                <label class="labelBuy" for="">
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

function fetchData () {
    fetch("/data/offer.json")
    .then(response => response.json())
    .then(stock => {
        errorBuy(stock);
    });
}


    let amount = document.querySelector("#buying");
    const btnBuy = document.querySelector("#btnB");

function errorBuy(products) {

    if (amount === products.stock) {
        alert("ayuda")
    } else if (amount <= products.stock) {
        alert("muy bien")
    }
}



btnBuy.addEventListener("click", (e) => {
    e.preventDefault();
    errorBuy()
})



