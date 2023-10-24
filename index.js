
import { productListController } from "./productList/productListController.js";

const loadProductsButtom = document.querySelector('#loadProducts');
loadProductsButtom.addEventListener('click', () => {
    
    const productList = document.getElementById('products');
    productListController(productList);

})





