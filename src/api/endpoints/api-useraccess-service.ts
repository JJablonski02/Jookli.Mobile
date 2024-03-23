import { API } from "../core/api-connection";
import axios from "axios";
import {RegisterUserDTO} from '@api';
import { REACT_APP_API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';

async function getAccessToken(){
    return await SecureStore.getItemAsync('accessToken');
}

//Sends request on user register
export const registerUser = async (userModel: RegisterUserDTO) => {
    try{
        const response = await API.post(`${REACT_APP_API_URL}/api/useraccess/registeruser`, userModel);
        return response.data;
    }catch(error){
        console.error('Register user failed', error);
    }
}

//Sends request on user sign in
export const loginUser = async (email: string, password: string) => {
    try{
        const response = await API.post(`${REACT_APP_API_URL}/api/useraccess/login`, {email, password});
        return response.data;
    }catch(error){
        console.error('Sign in user failed', error);
    }
}

//Downloads settings when user signs in
export const getSettingsOnLogin:  () => Promise<any> = async () => {
    try{
        const response = await axios.get(`${REACT_APP_API_URL}/api/useraccess/userSettings`);
        return response.data;
    }
    catch(error){
        console.error('Get settings on login failed', error);
    }
}

export const getAnalyticsData: (dateFilter : string) => Promise<any> = async (dateFilter) => {
    try{
        const token = await getAccessToken();
        const response = await axios.get(`api/useraccess/analytics`, {
            params:{
                dateFilter: dateFilter
            },
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }catch(error){
        console.error('Get analytics data failed', error);
    }
}


