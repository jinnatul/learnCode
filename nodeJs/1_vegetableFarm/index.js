const fs = require('fs');
const http = require('http');
const url = require('url');

function replaceTemplate(productData, productCardHTML) {
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

// server create
const overviewHTML = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8')
const productHTML = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')
const productCardHTML = fs.readFileSync(`${__dirname}/templates/productCard.html`, 'utf-8')
const data = fs.readFileSync(`${__dirname}/files/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
    const { query, pathname }  = url.parse(req.url, true);
    // overview page
    if (pathname == '/' || pathname == '/overview') {
        res.writeHead(200, {'Content-type': 'text/html'});
        const cardsHtml = dataObj.map(productData => replaceTemplate(productData, productCardHTML)).join('');
        const homeView = overviewHTML.replace('{%productCard%}', cardsHtml);
        res.end(homeView)
    }
    // product page
    else if (pathname == '/product') {
        res.writeHead(200, {'Content-type': 'text/html'});
        const productData = dataObj[query.id];
        const productView = replaceTemplate(productData, productHTML);
        res.end(productView)
    }
    // api
    else if (pathname == '/api') {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data)
    }
    // not found page
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hproductlo-world'
        })
        res.end('<h1>Page not found!</h1>')
    }
    
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Server run on 8000 number port')
})