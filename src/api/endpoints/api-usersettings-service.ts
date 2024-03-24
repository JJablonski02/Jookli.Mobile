import { API } from "../core/api-connection";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { NotifyError, NotifySuccess } from "../../components/notifications/Notify";

async function getAccessToken(){
    return await SecureStore.getItemAsync('accessToken');
}

export const getPaymentReceiver: () => Promise<any> = async () => {
    try {
        const token = await getAccessToken();
        const response = await axios.get("/api/userSettings/payments", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.log(`Get payment recevier failed ${error}`);
      }
    };


export const postPaymentReceiver: (paymentReceiver: any) => Promise<void> = async (paymentReceiver: any) =>{
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/userSettings/paymentReceiver`, paymentReceiver, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Post payment receiver failed', error);
    }
}

export const getPreferences: () => Promise<any> = async () => {
    try{
        const token = await getAccessToken();
        const response = await axios.get(`api/userSettings/preferences`, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Get preferences failed', error);
    }
}

export const postChangeEmail: (email: any) => Promise<any> = async (email: any) => {
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/userSettings/changeEmailAddress`, email, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.status;
    }catch(error){
        console.error('Post change email failed', error);
    }
}

export const postLanguageAndTimeZone: (settingsPreferencesLanguageTimeZone: any) => Promise<any> = async (settingsPreferencesLanguageTimeZone: any) => {
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/userSettings/languageAndTimeZone`, settingsPreferencesLanguageTimeZone, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });

        if(response.status === 200){
            NotifySuccess('Operation succeeded', 'Display profit updated successfully')
        }else{
            NotifyError('Operation failed', `Code: ${response.status}`)
        }

        return response.status;
    }catch(error){
        console.error('Post language and time zone failed', error);
    }
}

export const postDisplayProfitAs: (displayFormat: any) => Promise<any> = async (displayFormat: any) => {
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/userSettings/displayProfitAs`, displayFormat, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });

        if(response.status === 200){
            NotifySuccess('Operation succeeded', 'Display profit updated successfully')
        }else{
            NotifyError('Operation failed', `Code: ${response.status}`)
        }

        return response.status;
    }catch(error){
        console.error('Post display profit as failed', error);
    }
}

export const postRemoveAccount: () => Promise<void> = async () => {
    try{
        const token = await getAccessToken();
        const response = await axios.delete(`api/useraccess/removeAccount`, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Delete account failed', error);
    }

}

export const postSetDarkMode: (settingsPreferencesDarkMode: boolean) => Promise<any> = async (settingsPreferencesDarkMode: boolean) => {
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/userSettings/darkMode`, settingsPreferencesDarkMode, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });

        return response.status;
    }catch(error){
        console.error('Post dark mode failed', error);
    }
}

export const postVerifyEmail: () => Promise<any> = async () => {
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/useraccess/resendEmailConfirmation`, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Post verify email failed', error);
    }

}
    
export const getPrivacySettings: () => Promise<any> = async () => {
    try{
        const token = await getAccessToken();
        const response = await axios.get(`api/userSettings/privacy`, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Get privacy settings failed', error);
    }

}

export const postReceivingMessagesSettings: (settingsPrivacyReceivingMessages: any) => Promise<void> = async (settingsPrivacyReceivingMessages: any) => {
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/userSettings/receivingMessages`, settingsPrivacyReceivingMessages, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Post privacy settings failed', error);
    }

}

export const postNotificationsSettings: (settingsPrivacyNotifications: any) => Promise<void> = async (settingsPrivacyNotifications: any) => {
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/userSettings/receivingNotifications`, settingsPrivacyNotifications, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Post privacy settings failed', error);
    }
}

export const postContactDataSettings: (settingsPrivacyContactData: any) => Promise<void> = async (settingsPrivacyContactData: any) => {
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/userSettings/contactData`, settingsPrivacyContactData, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Post privacy settings failed', error);
    }
}

export const getInformationSettings: () => Promise<any> = async () => {
    try{
        const token = await getAccessToken();
        const response = await axios.get(`api/userSettings/informationSettings`, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Get information settings failed', error);
    }
}

export const postBasicInformations: (settingsInfoBasic: any) => Promise<void> = async (settingsInfoBasic: any) => {
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/userSettings/basicInformations`, settingsInfoBasic, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Post information settings failed', error);
    }
}

export const postExpereinceInformations: (settingsInfoExperience: any) => Promise<void> = async (settingsInfoExperience: any) => {
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/userSettings/experience`, settingsInfoExperience, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Post experience settings failed', error);
    }
}

export const postSubcategoryInformations: (settingsInfoSubcategory: any) => Promise<void> = async (settingsInfoSubcategory: any) => {
    try{
        const token = await getAccessToken();
        const response = await axios.post(`api/userSettings/subcategories`, settingsInfoSubcategory, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Post subcategory settings failed', error);
    }
}