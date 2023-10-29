const isValidPhoneNumber = (phoneNumber: string) =>
   /^(\7)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
      phoneNumber
   );

export default isValidPhoneNumber;
