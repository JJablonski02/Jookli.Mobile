import { combineReducers, createStore } from "redux";
import * as Device from 'expo-device';
import NetInfo, { NetInfoState, NetInfoStateType } from "@react-native-community/netinfo";

const initialState = {
    isLoading: false,
};

const rootReducer = combineReducers({
    appState: (state = initialState, action : any) => {
        switch (action.type) {
            case 'CURRENT_DEVICE_INFO':
                return {...state, deviceInfo: action.payload};
                case 'CURRENT_CONNECTION_INFO':
                    return {...state, connectionInfo: action.payload};
            default:
                return state;
        }
    }
});

export const store = createStore(rootReducer);

export const saveCurrentDeviceInfo = async () => {
    try
    {
    const connectionInfo = await getConnectionInfo();

    store.dispatch({type: 'CURRENT_DEVICE_INFO', payload: deviceInfo})
    store.dispatch({type: 'CURRENT_CONNECTION_INFO', payload: connectionInfo})
    }
    catch(e){
        console.log(e);
    }
}
 
const getConnectionInfo = async (): Promise<NetInfoState> => {
    const connectionInfo = await NetInfo.fetch();
    return connectionInfo;
};

const deviceInfo = {
    Name: Device.deviceName,
    Brand: Device.brand,
    Model: Device.modelName,
    ModelId: Device.modelId,
    Year: Device.deviceYearClass,
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
    PlatformApiLevel: Device.platformApiLevel,
    TotalMemory: Device.totalMemory,
    SupportedCpuArchitectures: Device.supportedCpuArchitectures,
}



