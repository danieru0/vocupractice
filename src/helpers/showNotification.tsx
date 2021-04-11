import { store } from 'react-notifications-component';

type notificationType = "success" | "danger" | "info" | "default" | "warning";

const showNotification = (title: string, message: string, type: notificationType) => {
    store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
    })   
}

export default showNotification;