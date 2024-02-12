import { NativeModules, Platform } from "react-native";
import i18next from "i18next";


export const SetDefaultAppLanguage = () : void => {
    if(Platform.OS === 'android'){
        
        const i18nManager : string = NativeModules.I18nManager.localeIdentifier;
            if (i18nManager) {
                console.log({i18nManager});
                i18next.changeLanguage('en');
            } else {
                console.warn('I18nManager is undefined on Android');
            }
    }
    else if(Platform.OS === 'ios'){
        const locale = NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0];
        if(locale ==! undefined){
            i18next.changeLanguage(locale);
        }
    }else{
        try{
            const defaultLocale : string = 'en';
            i18next.changeLanguage(defaultLocale);
        }catch(e){
            console.log("Error while setting default language: " + e);
        }
    }
    
};
