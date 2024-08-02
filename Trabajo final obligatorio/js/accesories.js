fetch("/data/accesories.json")
    .then(response => response.json())
    .then(Accesories => {
        AccesoriesProducts(Accesories);
    });

const offerProducts = document.getElementById("offerProducts");

const AccesoriesProducts = (products) => {
    

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("divCardsAccesories")

            productCard.innerHTML = `
            <article class="cardAccesories">
                <h2 class="titleAccesories">${product.name}</h2>
                <img class="imgProduct" src="${product.image}" alt="">
                <p class="descriptionProduct">${product.description}</p>
                <p class="price"> USD $${product.price}</p>
            </article>
        `

            offerProducts.append(productCard)
        });
};
