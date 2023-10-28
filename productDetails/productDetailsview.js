export const buildProduct = (product) => {
    return `
    <h3>${product.name}</h3>
    <img src="${product.photo}" alt="product image">
    <p>${product.description}</p>
    <p>${product.price}</p>
    <p>${product.status}</p>`;
}