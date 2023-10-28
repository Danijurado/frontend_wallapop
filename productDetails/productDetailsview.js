export const buildProduct = (product, user) => {
    let detail =  `
    <h3>${product.name}</h3>
    <img src="${product.photo}" alt="product image">
    <p>${product.description}</p>
    <p>${product.price}</p>
    <p>${product.status}</p>`;

   
    return detail
    
}