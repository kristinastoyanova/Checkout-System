const config = require('./pricingRulesConfig');
const products = require('./products');

const pricingRules = {
    applyFreeItem: (cart) => {
        const items = cart.items;
        const promoSku = config.freeItem.sku;
        const promoItems = items.filter(item => item.sku == promoSku);
        const count = promoItems.length;
        const min = config.freeItem.min;
        const freeNum = config.freeItem.free;
        const price = (promoItems[0])? promoItems[0].price : null;
        if(count >= min) {
            cart.totalDiscount += Math.floor(count / min) * freeNum * price;
        }
    },
    applyPriceDiscount: (cart) => {
        const items = cart.items;
        const promoSku = config.priceDiscount.sku;
        const promoItems = items.filter(item => item.sku == promoSku);
        const count = promoItems.length;
        const min = config.priceDiscount.min;
        const discount = config.priceDiscount.discount;
        if(count>=min) {
            cart.totalDiscount += count*discount;
        }
    },
    applyBonusItem: (cart) => {
        const items = cart.items;
        const promoSku = config.bonusItem.sku;
        const bonusSku = config.bonusItem.bonus;
        const promoItems = items.filter(item => item.sku == promoSku);
        const bonusItems = items.filter(item => item.sku == bonusSku);
        const bonusItem = products.find(product => product.sku == bonusSku);
        //Add bonus items in cart if the number of promo items is greater than the number of bonus items
        if(promoItems.length > bonusItems.length) {
            num = promoItems.length - bonusItems.length;
            for (let i = 0; i < num; i++) {
                items.push(bonusItem);
            }
        }
        cart.totalDiscount += promoItems.length*bonusItem.price;

    },
    calcAmount: (cart) => {
        const items = cart.items;
        const amount = items.reduce((a, b) => ({price: a.price + b.price}));
        cart.totalAmount =  amount.price;
    }
}


module.exports = pricingRules;