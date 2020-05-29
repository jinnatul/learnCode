const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate')

const port = process.env.PORT || 8000;

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

server.listen(port, () => {
    console.log(`Server run on port: ${port}`)
})