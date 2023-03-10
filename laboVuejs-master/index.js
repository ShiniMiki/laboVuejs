
const PRODUCT_MESSAGES = {
   OUT_OF_STOCK: "Plus de stock disponible",
    VIP:"Vous êtes devenu VIP"
};
let app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                key: 1,
                name: "Short Noir",
                description: "Un short noir pour les jour chaud",
                image: "img/blackShort.png",
                stock: 4,
                price: 50
            },
            {
                key: 2,
                name: "Short bleu",
                description: "Un short bleu pour les jour chaud",
                image: "img/blueShort.png",
                stock: 5,
                price: 50
            },
            {
                key: 3,
                name: "Short rouge",
                description: "Un short rouge pour les jour chaud",
                image: "img/redShort.png",
                stock: 6,
                price: 50
            },
            {
                key: 4,
                name: "Short vert",
                description: "Un short vert pour les jour chaud",
                image: "img/greenShort.png",
                stock: 5,
                price: 50
            }
        ],
        cartItems: [],
        productAvailability: [
            {
                key: 1,
                message: "Disponible",
                size: 4,
                style: "color: green"
            },
            {
                key: 2,
                message: "Limité",
                size: 0,
                style: "color: orange"
            }
        ],
        currentIndex: 0,
        vip: false
    },
    computed: {
        selectedProduct: function() {
            return this.products[this.currentIndex];
        },
        cartTotalPrice: function() {
            return this.cartItems.reduce(function(total, item) {
                return total + item.price;
            }, 0);
        }
    },
    methods: {
        selectProduct: function(product) {
            this.currentIndex = this.products.indexOf(product);
        },
        addToCart: function() {
            console.log(this.selectedProduct.stock);
            if (this.selectedProduct && this.selectedProduct.stock > 0) {
                this.selectedProduct.stock--;
                this.cartItems.push(this.selectedProduct);
                //vérifie que le prix total du panier est supérieur à 200
                if (this.cartTotalPrice >= 200 && this.vip === false) {
                    this.vip = true;
                    alert(PRODUCT_MESSAGES.VIP);
                }
            } else {
                alert(PRODUCT_MESSAGES.OUT_OF_STOCK);
            }
        },
        removeFromCart: function(index) {
            this.cartItems[index].stock++;
            this.cartItems.splice(index, 1);
            if (this.cartTotalPrice < 200 && this.vip === true) {
                this.vip = false;
            }
        },
        clearCart: function() {
            this.cartItems.forEach(function(item) {
                item.stock += 1;
            });
            this.cartItems = [];
            this.vip = false;
        }
    }
});