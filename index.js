
import { notificationsController } from "./notifications/notificationsController.js";
import { productListController } from "./productList/productListController.js";
import { userSessionController } from "./userSession/userSessionController.js";

const notifications = document.getElementById('notifications');


const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('products');
    productListController(productList);
    
    productList.addEventListener('productsLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type);
    })
    
    const userSession = document.getElementById('userSession');
    userSessionController(userSession);
})

window.addEventListener('offline', () => {
    showNotification('Se ha perdido la conexion', 'error');
})



