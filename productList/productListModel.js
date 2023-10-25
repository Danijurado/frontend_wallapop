

const transformProducts = (products) => {
    return products.map(product => ({
        name: product.name,
        description: product.description,
        price: product.price,
        status: product.status,
        photo: product.image
    }))
}

export const getProducts = async() => {
    const url = 'http://localhost:8000/api/products';
    let parsedProducts = [];
    try {
        const response = await fetch(url);
        const products = await response.json();
        parsedProducts = transformProducts(products);
        
    } catch (error) {
        throw error;
    }
    
    return parsedProducts;
}