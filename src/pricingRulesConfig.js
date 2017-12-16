const pricingRulesConfig = {
    freeItem: {
        sku: 'atv',
        min: 3,
        free: 1
    },
    priceDiscount: {
        sku: 'ipd',
        min: 4,
        discount: 50
    },
    bonusItem: {
        sku: 'mbp',
        bonus: 'vga'
    }
};

module.exports = pricingRulesConfig;