import React from "react";
import { Easing, Notifier, NotifierComponents } from "react-native-notifier";
import CustomSafeAreaView from "../SafeViewAndroid";

/**
 * Powiadoimienie o błędzie
 * @param title tytuł
 * @param message wiadomość
 */
export const NotifyError = (title: string, message: string) : void => {
    Notifier.showNotification({
        title: title,
        description: message,
        Component: NotifierComponents.Alert,
        componentProps:{
            alertType: "error",
            ContainerComponent: CustomSafeAreaView,
        },
        showEasing: Easing.bounce,
        duration: 4000,
        showAnimationDuration: 800,
    });
};

/**
 * Powiadomienie o sukcesie
 * @param title tytuł
 * @param message wiadomość
 */
export const NotifySuccess = (title: string, message: string) : void => {
    Notifier.showNotification({
        title: title,
        description: message,
        Component: NotifierComponents.Alert,
        componentProps:{
            alertType: 'success',
            ContainerComponent: CustomSafeAreaView,
        },
        showEasing: Easing.bounce,
        duration: 4000,
        showAnimationDuration: 800,
    });
};

/**
 * Powiadomienie ostrzegawcze
 * @param title tytuł
 * @param message wiadomość
 */
export const NotifyWarning = (title: string, message: string) : void => {
    Notifier.showNotification({
        title: title,
        description: message,
        Component: NotifierComponents.Alert,
        componentProps:{
            alertType: 'warn',
            ContainerComponent: CustomSafeAreaView,
        },
        showEasing: Easing.bounce,
        duration: 4000,
        showAnimationDuration: 800,
    });
};

/**
 * Powiadomienie informacyjne
 * @param title tytuł
 * @param message wiadomość
 */
export const NotifyInfo = (title: string, message: string) : void => {
    Notifier.showNotification({
        title: title,
        description: message,
        Component: NotifierComponents.Notification,
        componentProps:{
            ContainerComponent: CustomSafeAreaView,
        },
        showEasing: Easing.bounce,
        duration: 4000,
        showAnimationDuration: 800,
    });
};


