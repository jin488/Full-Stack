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

        
        let quantity = 1;

        productCard.innerHTML = `
            <article class="miniCard">
                <h2 class="titleProductOffer">${product.name}</h2>
                <img class="imgProduct" src="${product.image}" alt="">
                <div class="newOffer">
                <p class="priceOffer"> USD $${product.price} </p>
                <p class="oldPrice"> USD $${product.oldPrice}</p>
                <p class="discount"> ${product.offer}</p>
                </div>
                <div class="quantity-controls">
                        <button class="decrease">-</button>
                        <span class="quantity">${quantity}</span>
                        <button class="increase">+</button>
                </div>
                <button class="buy-button">Add to Cart</button>
            </article>
        `

        offerProducts.append(productCard)

        
        const quantityDisplay = productCard.querySelector('.quantity');
        const decreaseButton = productCard.querySelector('.decrease');
        const increaseButton = productCard.querySelector('.increase');
        const buyButton = productCard.querySelector('.buy-button');

        decreaseButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });
        
        increaseButton.addEventListener('click', () => {
            if (quantity = quantity) {
                quantity++;
                quantityDisplay.textContent = quantity;
            }
        });

        buyButton.addEventListener('click', () => {
            if (quantity > product.stock) {
                alert(`Not enough stock for ${product.name}`);
            } else {
                alert(`${quantity} ${product.name} added to cart`);
                product.stock -= quantity;
            }
        });
    });


};

