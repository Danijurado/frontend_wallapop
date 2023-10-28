export const createProduct = async (image, name, description, price, status) => {
    const url = 'http://localhost:8000/api/products';
    
    const body = {
        image: image,
        name: name,
        description: description,
        price: price,
        status: status
    }
    let response;
    const token = localStorage.getItem('token');
    try {
        response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
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