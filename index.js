const Checkout = require('./src/checkout');
const pricingRules = require('./src/pricingRules');
const products = require('./src/products');

//const co = new Checkout(pricingRules);

const testScan = (scanItems, productsBySKU) => {

    const co = new Checkout(pricingRules);
    for(let i=0; i<scanItems.length; i++) {
        co.scan(productsBySKU[scanItems[i]]);
    }

    console.log('SKU Scanned:', scanItems.join(', '), 'Total amount:',co.total());

}

productsBySKU = {};
for(p in products) {
    productsBySKU[products[p].sku]=products[p];
};


testScan(["atv", "atv", "atv", "vga"], productsBySKU);
testScan(["atv", "ipd", "ipd", "atv", "ipd", "ipd", "ipd"], productsBySKU);
testScan(["mbp", "vga", "ipd"], productsBySKU);