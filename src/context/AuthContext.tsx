import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
//import { REACT_APP_API_URL } from '@env';
import {RegisterUserDTO} from '@api'
import { ValidateLoginScreen } from '../common/FieldValidatorProvider';
import { REACT_APP_API_URL } from '@env';
import { NotifyError } from '../components/notifications/Notify';

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
    user: RegisterUserDTO) => Promise<any>;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  userInfo: {} as UserInfo,
  isLoading: false,
  splashLoading: false,
  register: async () => Promise.resolve(),
  login: (email, password) => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | {}>({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  ///Register sending all details like email, password, first name, 
  ///last name, gender, registration source, push notifications and is location allowed
  const register = async (
    user: RegisterUserDTO): Promise<any> => {
    setSplashLoading(true);
    try{
      const res = await axios.post(`${REACT_APP_API_URL}/api/useraccess/registeruser`, user);

      let userInfo = res.data as UserInfo;
      setUserInfo(userInfo);
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

      return res;
    }
    catch(e){
      setIsLoading(false);
      return e;
    }
  };

  ///Login with email and password
  const login = async (email: string, password: string) => {
    setSplashLoading(true);

    const params = new URLSearchParams();
      params.append('client_id', 'ro.client');
      params.append('client_secret', 'secret');
      params.append('scope', 'jookliApi.read jookliApi.write');
      params.append('grant_type', 'password');
      params.append('username', email);
      params.append('password', password);

await axios.post('/connect/token', params)
    .then((res) => {
      let userInfo = res.data as UserInfo;
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

      setSplashLoading(false);
    })
    .catch((e) => {
      NotifyError('Login failed', `${e.response.data['error_description']}`);
    });
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