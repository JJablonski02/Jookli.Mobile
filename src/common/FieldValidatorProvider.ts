const isFirstNameValid = (text: string) => {
    const firstName = text;
    if (!firstName) {
      return false;
    }
    const onlyLetters = /^[A-Za-z]+$/;
    return onlyLetters.test(firstName);
  };

  const isLastNameValid = (text: string) => {
    const lastName = text;

    if (!lastName) {
      return false;
    }
    const onlyLetters = /^[A-Za-z]+$/;
    return onlyLetters.test(lastName);
  };

  const isStreetValid = (text: string) => {
    const street = text;

    if (!street) {
      return false;
    }
    const onlyLetters = /^[A-Za-z]+$/;
    return onlyLetters.test(street);
  };

  const isHouseNumberValid = (text: string) => {
    const houseNumber = text;

    if (!houseNumber) {
      return false;
    }
    const onlyLetters = /^[0-9A-Za-z/]+$/;
    return onlyLetters.test(houseNumber);
  };

  const isZipCodeValid = (text: string) => {
    const zipCode = text;

    if (!zipCode) {
      return false;
    }
    const onlyLetters = /^[0-9-]+$/;
    return onlyLetters.test(zipCode);
  };

  const isCityValid = (text: string) => {
    const city = text;

    if (!city) {
      return false;
    }
    const onlyLetters = /^[A-Za-z]+$/;
    return onlyLetters.test(city);
  };

  const isStateRegionValid = (text: string) => {
    const stateRegion = text;

    if (!stateRegion) {
      return false;
    }
    const onlyLetters = /^[A-Za-z]+$/;
    return onlyLetters.test(stateRegion);
  };
  const isAreaCodeSelected = (text: string) => {
    const areaCode = text;

    if(areaCode){
      return true;
    }

    return false;
  };

  const isPhoneNumberValid = (text: string) => {
    const phoneNumber = text;

    if (!phoneNumber) {
      return false;
    }
    const onlyLetters = /^[0-9-]+$/;
    return onlyLetters.test(phoneNumber);
  };

  const isUserNameValid = (text: string) => {
    const userName = text;

    if(!userName){
      return false;
    }

    const emailFormat = /\S+@\S+\.\S+/;
    return emailFormat.test(userName);
  };

  const isPasswordValid = (text: string) => {
    const password = text;

    if(!password){
      return false;
    }

    const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordFormat.test(password);
  };

  
interface PaymentDetails {
    FirstName: string;
    LastName: string;
    Street: string;
    HouseNumber: string;
    ZipCode: string;
    City: string;
    StateRegion: string;
    Currency: string;
    Country: string;
  }

  export const ValidatePaymentsComponent : (paymentDetails : PaymentDetails) => string | null = (paymentDetails) =>{
    switch (true) {
      case !isFirstNameValid(paymentDetails.FirstName):
        return "First name is not valid";
      case !isLastNameValid(paymentDetails.LastName):
        return "Last name is not valid";
      case !isStreetValid(paymentDetails.Street):
        return "Street is not valid";
      case !isHouseNumberValid(paymentDetails.HouseNumber):
        return "House number is not valid";
      case !isZipCodeValid(paymentDetails.ZipCode):
        return "Zip code is not valid";
      case !isCityValid(paymentDetails.City):
        return "City is not valid";
      case !isStateRegionValid(paymentDetails.StateRegion):
        return "State or region is not valid";
      default:
        return null;
    }
  };

  interface ContactProps {
    FirstName: string;
    LastName: string;
    AreaCode: string;
    PhoneNumber: string;
  };

  export const ValidatePrivacyContactComponent : (contactProps : ContactProps) => string | null = (contactProps) =>{
    switch (true) {
      case !isFirstNameValid(contactProps.FirstName):
        return "First name is not valid";
      case !isLastNameValid(contactProps.LastName):
        return "Last name is not valid";
        case !isAreaCodeSelected(contactProps.AreaCode):
            return "Area code is not selected";
      case !isPhoneNumberValid(contactProps.PhoneNumber):
        return "Phone number is not valid";
      default:
        return null;
    }
  };

  interface NotificationProps{
    TaskCompleted: boolean;
    TransferConfirmation: boolean;
    NewRegistration: boolean;
    MoneyFromReferral: boolean;
    OccasionalEvents: boolean;
  };
  
  export const ValidatePrivacyNotificationsComponent : (notificationProps : NotificationProps) => string | null = (notificationProps) =>{
    console.log(notificationProps);
    return null;
  }

  interface ReceivingMessagesProps{
    PersonalizedHelp: boolean;
    PeriodicNewsletters: boolean;
    OccasionalSurveys: boolean;
    SpecialOffers: boolean;
  };

  export const ValidatePrivacyMessagesComponent : (receivingMessagesProps : ReceivingMessagesProps) => string | null = (receivingMessagesProps) =>{
    console.log(receivingMessagesProps);
    return null;
  };

  interface LoginProps{
    username: string;
    password: string;
  };

  export const ValidateLoginScreen: (loginProps : LoginProps) => string | null = (loginProps) =>{
    switch(true){
      case !isUserNameValid(loginProps.username):
        return "Email is not valid";
      case !isPasswordValid(loginProps.password):
        return "Password is not valid";
      default:
        return null;
    }
  }
  