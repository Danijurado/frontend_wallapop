import {getProducts} from './productListModel.js';
import {buildProduct} from './productListView.js';
import { emptyProducts } from './productListView.js';

export const productListController = async (productList) => {
    productList.innerHTML = '';
    const products = await getProducts()

    if (products.length === 0) {
       
       productList.innerHTML = emptyProducts();
    } else{
        products.forEach(product => {
            
            const productContainer = document.createElement('div');
            productContainer.innerHTML = buildProduct(product);
            
            productList.appendChild(productContainer);
        })

        const event = new CustomEvent('productsLoaded');
        productList.dispatchEvent(event);

    }

}

