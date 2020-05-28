module.exports = (productData, productCardHTML) => {
    let output = productCardHTML.replace(/{%id%}/g, productData.id)
    output = output.replace(/{%productName%}/g, productData.productName);
    output = output.replace(/{%image%}/g, productData.image);
    output = output.replace(/{%from%}/g, productData.from);
    output = output.replace(/{%nutrients%}/g, productData.nutrients);
    output = output.replace(/{%quantity%}/g, productData.quantity);
    output = output.replace(/{%price%}/g, productData.price);
    output = output.replace(/{%description%}/g, productData.description);
    if (!productData.organic) output = output.replace(/{%not_organic%}/g, 'not-organic');
    return output
}