const ShoppingCart = require('./shoppingCart');

const Checkout = function(pricingRules) {
    this.cart = new ShoppingCart();
    this.scan = (obj) => {
        this.cart.items.push(obj);
    }
    this.total = () => {
        pricingRules.applyFreeItem(this.cart);
        pricingRules.applyPriceDiscount(this.cart);
        pricingRules.applyBonusItem(this.cart);
        pricingRules.calcAmount(this.cart);

        return  this.cart.totalAmount - this.cart.totalDiscount;

    }
}

module.exports = Checkout;