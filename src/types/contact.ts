export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  hours: {
    days: string;
    hours: string;
  }[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}