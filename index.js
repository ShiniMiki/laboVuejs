/*
Nom et Prenom : Fernandez Mikael
Nom du fichier : index.js
Date : 28.02.2021
Description : Le vue.js du projet gérer un panier d'achat et un système de VIP pour un site de vente de shorts en ligne
*/

const PRODUCT_MESSAGES = {
   OUT_OF_STOCK: "Nous sommes désolés, mais ce produit a rencontré un succès tel que les stocks ont fondu plus rapidement qu'une glace en plein soleil.",
    VIP_MESSAGE: "Vous avez atteint le seuil de 200€ d'achat, vous êtes devenu VIP",
    ACHAT: "Votre achat a été annulé avec succès ! Vous pouvez maintenant vous reposer sur vos lauriers en sachant que votre carte de crédit est toujours en sécurité. 🛡️😴",
};
const VIP_MINIMUM = 200;
let app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                key: 1,
                name: "Short Noir",
                image: "img/blackShort.png",
                description:"Un joli short noir pour l'été",
                stock: 4,
                price: 50
            },
            {
                key: 2,
                name: "Short bleu",
                image: "img/blueShort.png",
                description:"Un joli short bleu pour l'été",
                stock: 5,
                price: 40
            },
            {
                key: 3,
                name: "Short rouge",
                image: "img/redShort.png",
                description:"Un joli short rouge pour l'été",
                stock: 6,
                price: 70
            },
            {
                key: 4,
                name: "Short vert",
                image: "img/greenShort.png",
                description:"Un joli short vert pour l'été",
                stock: 5,
                price: 80
            }
        ],
        productAvailability: [
            {
                key: 1,
                message: "Disponible",
                size: 2,
                style: "color: green"
            },
            {
                key: 2,
                message: "Presque épuisé",
                size: 0,
                style: "color: orange"
            }
        ],
        cartQuantities: {
        },
        currentIndex: 0,
        vip: false,
        totalPrice: 0
    },
    computed: {
        selectedProduct: function() {
            return this.products[this.currentIndex];
        },
    },
    methods: {
        selectProduct: function(product) {
            this.currentIndex = this.products.indexOf(product);
        },
        addToCart: function() {

            // check si le produit est disponible
            if (this.selectedProduct.stock === 0) {
                alert(PRODUCT_MESSAGES.OUT_OF_STOCK);
                return;
            }
            // vérifie si le produit est déjà dans le panier
            if (this.cartQuantities[this.selectedProduct.key]) {
                this.cartQuantities[this.selectedProduct.key]++;
            } else {
                this.cartQuantities[this.selectedProduct.key] = 1;
            }

            // decrement stock
            this.selectedProduct.stock--;

            this.calculateCartTotalPrice();
            // check le status VIP
            if (this.totalPrice >= VIP_MINIMUM && !this.vip) {
                this.vip = true;
                alert(PRODUCT_MESSAGES.VIP_MESSAGE);
            }
        },
        clearCart: function()
        {
            // reset le stock est le panier
            for (let key in this.cartQuantities) {
                this.products[key - 1].stock += this.cartQuantities[key];

            }
            //reset cartQuantities
            this.cartQuantities = {};

            // reset le status VIP
            this.vip = false;
            this.calculateCartTotalPrice();
        },
        //calcule le prix total du panier
        calculateCartTotalPrice: function() {
            this.totalPrice = 0;
            for (let key in this.cartQuantities) {
                this.totalPrice += this.products[key - 1].price * this.cartQuantities[key];
            }
        },
        //achat
        buy: function () {
            alert(PRODUCT_MESSAGES.ACHAT);
        }
    }
});