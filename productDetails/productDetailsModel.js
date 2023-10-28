const parseProduct = (product) => {
    return {
        name: product.name,
        description: product.description,
        price: product.price,
        status: product.status,
        photo: product.image,
        id: product.id,
        userId: product.userId
        
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

export const deleteProduct = async (productId) => {
    const url = `http://localhost:8000/api/products/${productId}`;
    
    let response;
    const token = localStorage.getItem('token');
    try {
        response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const data = await response.json()
            throw new Error(data.message);
        }
        
    } catch (error) {
        if (error.message) {
            throw error.message
        } else {
            throw error;
        }
        
    }
}