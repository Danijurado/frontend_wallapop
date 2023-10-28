import { createProduct } from "./productCreationModels.js";

export const productCreationController = (creation) => {
    creation.addEventListener('submit', async (event) => {
        event.preventDefault()
        const formData = new FormData(creation);
        const image = formData.get('image');
        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const status = formData.get('status');
        
        const base64Image = await toBase64(image);
        
        await createProduct(base64Image, name, description,price,status);
        window.location = './index.html';
    })
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});