

let currentPage = 'notebooks';
const prodContainer = document.getElementsByClassName('prodContainer')[0];

const getProductDiv = (product) => {
    return `
    <div>
    <h2> ${product.title}</h2>
    <h3>${product.price}</h3>
    <img src="${product.image}" alt="${product.title}">
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