

let currentPage = 'notebooks';
const prodContainer = document.getElementsByClassName('prodContainer')[0];

const getProductDiv = (product) => {
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
  
const renderProducts = () => {
    const productsDiv = currentPage === 'notebooks' ? notebooks.map(getProductDiv):
    craft.map(getProductDiv).join('');
    prodContainer.innerHTML = productsDiv;
}

const changePage = (pageCategory) => {
    currentPage = pageCategory;
    renderProducts();
}