
import { notificationsController } from "./notifications/notificationsController.js";
import { productListController } from "./productList/productListController.js";


const loadProductsButtom = document.querySelector('#loadProducts');
const productList = document.getElementById('products');
const notifications = document.getElementById('notifications');

const showNotification = notificationsController(notifications);

loadProductsButtom.addEventListener('click', () => {
    productListController(productList);
})

productList.addEventListener('productsLoaded', () => {
    
    showNotification('productos cargados satisfactoriamente');
})





