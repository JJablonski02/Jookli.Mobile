import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
//import { REACT_APP_API_URL } from '@env';
import {RegisterUserDTO} from '@api'
const REACT_APP_API_URL = "https://localhost:7133/api";

interface UserInfo {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

export interface AuthContextProps {
  isLoading: boolean;
  userInfo: UserInfo;
  splashLoading: boolean;
  register: (
    email: string, 
    password: string, 
    confirmPassword: string, 
    firstName: string,
    lastName: string,
    gender: number,
    registrationSource: number,
    pushNotifications: boolean,
    isLocationAllowed: boolean) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}


export const AuthContext = createContext<AuthContextProps>({
  userInfo: {} as UserInfo,
  isLoading: false,
  splashLoading: false,
  register: () => {},
  login: (email, password) => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | {}>({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  ///Register sending all details like email, password, first name, 
  ///last name, gender, registration source, push notifications and is location allowed
  const register = (
    email: string, 
    password: string, 
    confirmPassword: string, 
    firstName: string,
    lastName: string,
    gender: number,
    registrationSource: number,
    pushNotifications: boolean,
    isLocationAllowed: boolean) => {
    setIsLoading(true);

    axios
      .post(`${REACT_APP_API_URL}/api/useraccess/registeruser`, {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        gender,
        registrationSource,
        pushNotifications,
        isLocationAllowed,
      })
      .then((res) => {
        let userInfo = res.data as UserInfo;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  ///Login with email and password
  const login = (email: string, password: string) => {
    setIsLoading(true);
    console.log(`login ${email} ${password}`);
    axios
      .post(`https://localhost:7133/connect/token`, {
        client_id: 'ro.client',
        client_secret: 'secret',
        scope: 'jookliApi.read jookliApi.write',
        grant_type: 'password',
        username: email,
        password: password,
      }).then((res) => {
        console.log(res.data);
      }).catch((e) => {
        console.log(`login error ${e}`);
      });
      // .then((res) => {
      //   let userInfo = res.data as UserInfo;
      //   console.log(userInfo);
      //   setUserInfo(userInfo);
      //   AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      //   setIsLoading(false);
      // })
      // .catch((e) => {
      //   console.log(`login error ${e}`);
      //   setIsLoading(false);
      // });
  };

  ///This function provides logout user
  const logout = () => {
    setIsLoading(true);

    axios
      .post(
        `${REACT_APP_API_URL}/api/useraccess/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${(userInfo as UserInfo).access_token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfoStr = await AsyncStorage.getItem('userInfo');
      let userInfo: UserInfo | null = userInfoStr ? JSON.parse(userInfoStr) : null;

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo: userInfo as UserInfo,
        splashLoading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};