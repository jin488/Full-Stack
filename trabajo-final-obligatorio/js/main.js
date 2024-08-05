fetch("/data/products.json")
    .then(response => response.json())
    .then(products => {
        gridProducts(products);
    });

const products = document.getElementById("boxProducts");

const gridProducts = (comerce) => {
    

        comerce.forEach(product => {
            const productCard = document.createElement("div");

            productCard.innerHTML = `
            <article class="card">
                <h2 class="titleProduct">${product.name}</h2>
                <img class="imgProduct" src="${product.image}" alt="">
                <p class="descriptionProduct">${product.description}</p>
                <p class="price"> USD $${product.price}</p>
                <button class="viewMore"><a href="" class="viewMore2">Ver mas</a></button>
            </article>
        `

            products.append(productCard)
        });
};


