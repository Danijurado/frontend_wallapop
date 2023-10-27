
import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import { productListController } from "./productList/productListController.js";
import { userSessionController } from "./userSession/userSessionController.js";

const notifications = document.getElementById('notifications');


const showNotification = notificationsController(notifications);

const loader = document.getElementById('loader');
const {show, hide} = loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('products');
    
    productList.addEventListener('productsLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type);
    })
    
    productList.addEventListener('loadingProducts', () => {
        show();
    })
    
    productList.addEventListener('finishLoadingProducts', () => {
        hide();
    })
    
    productListController(productList);
    
    const userSession = document.getElementById('userSession');
    userSessionController(userSession);

})

window.addEventListener('offline', () => {
    showNotification('Se ha perdido la conexion', 'error');
})



