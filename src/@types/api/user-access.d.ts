declare module '@api'{
    export interface RegisterUserDTO{
        email: string;
        password: string;
        confirmPassword: string;
        registrationSource: int;
        deviceInfo: DeviceInfo;
        connectionInfo: ConnectionInfo;
    }

    export interface DeviceInfo {
        name: string;
        brand: string;
        model: string;
        modelId: string;
        deviceYearClass: string;
        deviceType: string;
        os: string;
        osVersion: string;
        osBuild: string;
        osInternal: string;
        manufacturer: string;
        isDevice: boolean;
        designName: string;
        osBuildFingerprint: string;
        productName: string;
        platformApiLevel: string;
        totalMemory: string;
        supportedCpuArchitectures: string[];
      }
      export interface ConnectionInfo {
        details: Details;
        isConnected: boolean;
        isInternetReachable: boolean;
        isWifiEnabled: boolean;
        type: string;
      }
    export interface Details {
        bssid: string;
        frequency: string;
        ipAddress: string;
        isConnectionExpensive: boolean;
        linkSpeed: string;
        rxLinkSpeed: string;
        strength: string;
        subnet: string;
        txLinkSpeed: string;
      }

}

declare module '@api'{
  export interface RegisterUserDTO{
      email: string;
      password: string;
      confirmPassword: string;
      registrationSource: int;
      deviceInfo: DeviceInfo;
      connectionInfo: ConnectionInfo;
  }

  // export interface DeviceInfo {
  //     name: string;
  //     brand: string;
  //     model: string;
  //     modelId: string;
  //     deviceYearClass: number;
  //     deviceType: string;
  //     os: string;
  //     osVersion: string;
  //     osBuild: string;
  //     osInternal: string;
  //     manufacturer: string;
  //     isDevice: boolean;
  //     designName: string;
  //     osBuildFingerprint: string;
  //     productName: string;
  //     platformApiLevel: number;
  //     totalMemory: number;
  //     supportedCpuArchitectures: string[];
  //   }
  //   export interface ConnectionInfo {
  //     details: Details;
  //     isConnected: boolean;
  //     isInternetReachable: boolean;
  //     isWifiEnabled: boolean;
  //     type: string;
  //   }
  // export interface Details {
  //     bssid: string;
  //     frequency: number;
  //     ipAddress: string;
  //     isConnectionExpensive: boolean;
  //     linkSpeed: number;
  //     rxLinkSpeed: number;
  //     strength: number;
  //     subnet: string;
  //     txLinkSpeed: number;
  //   }

}