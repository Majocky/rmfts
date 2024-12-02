import { ContactInfo } from '../types/contact';

export const contactInfo: ContactInfo = {
  address: '123 Bible School Road, Grace City, GC 12345',
  email: 'admissions@gracebibleschool.edu',
  phone: '(555) 123-4567',
  hours: [
    { days: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
    { days: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
};