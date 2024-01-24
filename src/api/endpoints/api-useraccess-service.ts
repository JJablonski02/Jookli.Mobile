import { readonly } from "../../helpers/readonly";
import { API } from "../core/api-connection";
import axios from "axios";
import {RegisterUserDTO} from '@api';

const DOMAIN = readonly({
    path: '/useraccess'

});

export const registerUser = async (userModel: RegisterUserDTO) => {
    try{
        const response = await API.post(`${DOMAIN.path}/api/useraccess/registeruser`, userModel);
        return response.data;
    }catch(error){
        console.error('Błąd rejestracji użytkownika', error);
        throw error;
    }
}

export const loginUser = async (email: string, password: string) => {
    try{
        const response = await API.post(`${DOMAIN.path}/api/useraccess/login`, {email, password});
        return response.data;
    }catch(error){
        console.error('Błąd logowania użytkownika', error);
        throw error;
    }
}