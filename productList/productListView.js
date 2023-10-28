
    export const buildProduct = (product) => {
        
        return `
        <a href="./productDetail.html?id=${product.id}">
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="product image">
            <p>${product.description}</p>
            <p>${product.price}</p>
            <p>${product.status}</p>
        </a>
        `
    }

    export const emptyProducts = () => {
        return `<h3>No hay productos disponibles</h3>`
    }