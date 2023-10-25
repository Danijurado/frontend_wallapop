import { buildNotifications } from "./notificationsView.js";

export const notificationsController = (notifications) => {

    const showNotification = (message) => {
        notifications.innerHTML = buildNotifications(message);
        setTimeout(() => {
            notifications.innerHTML = '';
        }, 2000);
    }
    return showNotification;
}