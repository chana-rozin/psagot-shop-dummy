

const getProductDiv = (product) =>{
    return `
    <div>
    <h2> ${product.title}</h2>
    <h3>${product.price}</h3>
    <img src="${product.image}" alt="${product.title}">
    </div>
    `
}

const renderProducts = (products) => {
    const productDivs = products.map(getProductDiv).join('');
    debugger
    document.getElementsByClassName('prodContainer')[0].innerHTML = productDivs;
}