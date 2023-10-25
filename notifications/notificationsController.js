import { buildNotifications } from "./notificationsView.js";

export const notificationsController = (notifications) => {

    const showNotification = (message, type) => {
        notifications.innerHTML = buildNotifications(message, type);
        setTimeout(() => {
            notifications.innerHTML = '';
        }, 2000);
    }
    return showNotification;
}