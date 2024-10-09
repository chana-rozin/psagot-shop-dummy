

const getProductDiv = (product) =>{
    return `
    <div class="prod">
    <p class="ptitle"> ${product.title}</p>
    <img src="${product.image}" alt="${product.title}">
    <div class="card-footer">
    <p class="price">${product.price}</p>
    <button class="add-to-cart">הוספה לסל</button>
    </div>
    </div>
    `
}

const renderProducts = (products) => {
    const productDivs = products.map(getProductDiv).join('');
    document.getElementsByClassName('prodContainer')[0].innerHTML = productDivs;
}