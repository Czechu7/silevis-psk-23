export interface ICompanyApiResponse {
  result: {
    subject: {
      name: string;
      nip: string;
      statusVat: string;
      regon: string;
      pesel: string | null;
      krs: string;
      residenceAddress: string | null;
      workingAddress: string;
      representatives: any[];
      authorizedClerks: any[];
      partners: any[];
      registrationLegalDate: string;
      registrationDenialBasis: string | null;
      registrationDenialDate: string | null;
      restorationBasis: string | null;
      restorationDate: string | null;
      removalBasis: string | null;
      removalDate: string | null;
      accountNumbers: string[];
      hasVirtualAccounts: boolean;
    };
    requestId: string;
    requestDateTime: string;
  };
}
