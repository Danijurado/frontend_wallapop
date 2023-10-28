import {getProducts} from './productListModel.js';
import {buildProduct} from './productListView.js';
import { emptyProducts } from './productListView.js';
import { spinnerEvent } from '../utils/spinnerEvent.js';

export const productListController = async (productList) => {
    productList.innerHTML = '';
    let products = [];
    
    try {
        spinnerEvent('loadingProducts', null, productList);
        products = await getProducts()
    } catch (error) {
        const event = createEvent('error', 'Error al cargar productos');
        productList.dispatchEvent(event);
    }finally {
        spinnerEvent('finishLoadingProducts', null, productList);
    }

    if (products.length === 0) {
       
       productList.innerHTML = emptyProducts();
    } else{
        drawProducts(products, productList);
        const event = createEvent('succes', 'Productos cargados satisfactoriamente' )
        productList.dispatchEvent(event);

    }

}

const drawProducts = (products, productList) => {
    products.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.innerHTML = buildProduct(product);
        
        productList.appendChild(productContainer);
    })
}

const createEvent = (type, message) => {
    const event = new CustomEvent('productsLoaded', {
        detail: {
            type: type,
            message: message
        }
    });
    return event;
}
