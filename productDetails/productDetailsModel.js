const parseProduct = (product) => {
    return {
        name: product.name,
        description: product.description,
        price: product.price,
        status: product.status,
        photo: product.image,
        id: product.id
        
    }
}

export const getProduct = async (productId) => {
    const url = `http://localhost:8000/api/products/${productId}`;
    let product;
    try {
        const response = await fetch(url);
        if (response.ok) {
            product = await response.json();

        } else {
            throw new Error('El producto no existe');
        }
        
    } catch (error) {
        throw error.message;
    }

    return parseProduct(product);
}