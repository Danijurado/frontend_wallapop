
import { notificationsController } from "./notifications/notificationsController.js";
import { productListController } from "./productList/productListController.js";

const notifications = document.getElementById('notifications');
const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('products');
    productListController(productList);

    productList.addEventListener('productsLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type);
    })
})

window.addEventListener('offline', () => {
    showNotification('Se ha perdido la conexion', 'error');
})



