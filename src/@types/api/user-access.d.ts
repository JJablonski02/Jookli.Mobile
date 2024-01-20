declare module '@api'{
    export interface RegisterUserDTO{
        email: string;
        password: string;
        confirmPassword: string;
        firstName: string;
        lastName: string;
        gender: int;
        registrationSource: int;
        pushNotificationToken: boolean;
        isLocationAllowed: boolean;
    }
}