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

  const isEmailAddressValid = (text: string) => {
    const emailAddress = text;

    if(!emailAddress){
      return false;
    }

    const emailFormat = /\S+@\S+\.\S+/;
    return emailFormat.test(emailAddress);
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
    firstName: string;
    lastName: string;
    street: string;
    houseNumber: string;
    zipCode: string;
    city: string;
    stateOrRegion: string;
    currency: string;
    country: string;
  }

  export const ValidatePaymentsComponent : (paymentDetails : PaymentDetails) => string | null = (paymentDetails) =>{
    switch (true) {
      case !isFirstNameValid(paymentDetails.firstName):
        return "First name is not valid";
      case !isLastNameValid(paymentDetails.lastName):
        return "Last name is not valid";
      case !isStreetValid(paymentDetails.street):
        return "Street is not valid";
      case !isHouseNumberValid(paymentDetails.houseNumber):
        return "House number is not valid";
      case !isZipCodeValid(paymentDetails.zipCode):
        return "Zip code is not valid";
      case !isCityValid(paymentDetails.city):
        return "City is not valid";
      case !isStateRegionValid(paymentDetails.stateOrRegion):
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
    taskCompleted: boolean;
    transferConfirmation: boolean;
    referralRegistration: boolean;
    referralMoneyMade: boolean;
    occasionalEvents: boolean;
  };
  
  export const ValidatePrivacyNotificationsComponent : (notificationProps : NotificationProps) => string | null = (notificationProps) =>{
    return null;
  }

  interface ReceivingMessagesProps{
    personalizedHelp: boolean;
    periodicNewsletters: boolean;
    occasionalSurveys: boolean;
    specialOffers: boolean;
  };

  export const ValidatePrivacyMessagesComponent : (receivingMessagesProps : ReceivingMessagesProps) => string | null = (receivingMessagesProps) =>{
    return null;
  };

  interface LoginProps{
    username: string;
    password: string;
  };

  export const ValidateLoginScreen: (loginProps : LoginProps) => string | null = (loginProps) =>{
    switch(true){
      case !isEmailAddressValid(loginProps.username):
        return "Email is not valid";
      case !isPasswordValid(loginProps.password):
        return "Password is not valid";
      default:
        return null;
    }
  }

  interface RegisterProps{
    email: string;
    password: string;
    confirmPassword: string;
  };

  export const ValidateRegisterScreen: (user : RegisterProps) => string | null = (user) =>{
    switch(true){
      case !isEmailAddressValid(user.email):
        return "Email is not valid";
      case !isPasswordValid(user.password):
        return "Password is not valid";
      case user.password !== user.confirmPassword:
        return "Passwords do not match";
      default:
        return null;
    }
  };

  export const ValidateChangeEmailAddress: (email: string) => string | null = (email) =>{
    switch(true){
      case !isEmailAddressValid(email):
        return "Email is not valid";
      default:
        return null;
    }
  };

  export const ValidateRecoverEmailAddress: (email: string) => string | null = (email) =>{
    switch(true){
      case !isEmailAddressValid(email):
        return "Email is not valid";
      default:
        return null;
    }
  }
  