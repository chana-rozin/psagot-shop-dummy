

let currentPage = 'notebooks';
const prodContainer = document.getElementsByClassName('prodContainer')[0];
const pageTitle = document.getElementsByClassName('current-page-display')[0];

const getProductDiv = (product) => {
    return `
    <div class="prod">
    <p class="ptitle"> ${product.title}</p>
    <img src="${product.image}" alt="${product.title}">
    <div class="card-footer">
    <p class="price"> <i class="fa-solid fa-shekel-sign"></i> ${product.price}</p>
    <button class="add-to-cart">הוספה לסל</button>
    </div>
    </div>
    `
}

const renderProducts = async () => {
    let productsDiv;
    switch (currentPage) {
        case 'notebooks':
            {
                productsDiv = notebooks.map(getProductDiv).join('');
                pageTitle.innerHTML = 'מחברות';
                break;
            }
        case 'craft':
            {
                productsDiv = craft.map(getProductDiv).join('');
                pageTitle.innerHTML = 'מכשירי כתיבה';
                break;
            }
        case 'clothes':
            {
                try {
                    productsDiv = await fetchClothes();

                } catch (error) {
                    console.error('Error:', error);
                }
                break;
            }
        default:
            break;
    }
    prodContainer.innerHTML = productsDiv;
}

const changePage = (pageCategory) => {
    currentPage = pageCategory;
    renderProducts();
}

const fetchClothes = async () => {
    const response = await fetch('/https://fakestoreapi.com');
    if (response.ok) {
        const data = await response.json();
        const productsDiv = data.map(getProductDiv).join('');
        pageTitle.innerHTML = 'בגדים';
    }
    else {
        throw new Error('Error fetching data from API');
    }
    return productsDiv;
}