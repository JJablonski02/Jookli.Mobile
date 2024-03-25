import { combineReducers, createStore } from "redux";
import * as Device from 'expo-device';
import NetInfo, { NetInfoState, NetInfoStateType } from "@react-native-community/netinfo";
import { Appearance } from "react-native";

const initialState = {
    isLoading: false,
    splashLoading: false,
    deviceInfo: {},
    connectionInfo: {},
    darkMode: false
};

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    appState: (state = initialState, action : any) => {
        switch (action.type) {
            case 'CURRENT_DEVICE_INFO':
                return {...state, deviceInfo: action.payload};
                case 'CURRENT_CONNECTION_INFO':
                    return {...state, connectionInfo: action.payload};
                    case 'SET_SPLASHLOADING':
                        return {...state, splashLoading: action.payload};
                        case 'SET_LOADING':
                            return {...state, isLoading: action.payload};
                            case 'SET_DARK_MODE':
                                return {...state, darkMode: action.payload};
            default:
                return state;
        }
    }
});

export const setLoading = (isLoading: boolean) => ({
    type: 'SET_LOADING',
    payload: isLoading
});

export const setSplashLoading = (splashLoading: boolean) => ({
    type: 'SET_SPLASH_LOADING',
    payload: splashLoading
});

export const setDarkMode = (darkMode: boolean) => ({
    type: 'SET_DARK_MODE',
    payload: darkMode
});

export const store = createStore(rootReducer);

export const saveCurrentDeviceInfo = async () => {
    try
    {
    const connectionInfo = await getConnectionInfo();
    const darkMode = getApperanceInfo();

    store.dispatch({type: 'CURRENT_DEVICE_INFO', payload: deviceInfo})
    store.dispatch({type: 'CURRENT_CONNECTION_INFO', payload: connectionInfo})
    store.dispatch({type: 'SET_DARKMODE', payload: darkMode})

    }
    catch(e){
        console.log(e);
    }
}

const getApperanceInfo = () =>{
    const result = Appearance.getColorScheme();
    if(result === 'dark'){
        return true;
    }else{
        return false;
    }

}
 
const getConnectionInfo = async (): Promise<NetInfoState> => {
    const connectionInfo = await NetInfo.fetch();
    connectionInfo.isInternetReachable = connectionInfo.isInternetReachable ?? false;
    connectionInfo.isWifiEnabled = connectionInfo.isWifiEnabled ?? false;
    connectionInfo.isConnected = connectionInfo.isConnected ?? false;
    
    return connectionInfo;
};

const deviceInfo = {
    Name: Device.deviceName,
    Brand: Device.brand,
    Model: Device.modelName,
    ModelId: Device.modelId,
    Year: Device.deviceYearClass?.toString() || null,
    Type: Device.deviceType,
    OS: Device.osName,
    OSVersion: Device.osVersion,
    OSBuild: Device.osBuildId,
    OSInternal: Device.osInternalBuildId,
    Manufacturer: Device.manufacturer,
    IsDevice: Device.isDevice,
    DesignName: Device.designName,
    OsBuildFingerprint: Device.osBuildFingerprint,
    ProductName: Device.productName,
    PlatformApiLevel: Device.platformApiLevel?.toString() || null,
    TotalMemory: Device.totalMemory?.toString() || null,
    SupportedCpuArchitectures: Device.supportedCpuArchitectures,
}



