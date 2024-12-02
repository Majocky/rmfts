export interface AdmissionRequirement {
  id: string;
  title: string;
  description: string;
  required: boolean;
}

export interface Program {
  id: string;
  name: string;
  type: 'Certificate' | 'Diploma' | 'Degree';
  duration: string;
  requirements: AdmissionRequirement[];
}

export interface ApplicationForm {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    address: string;
  };
  education: {
    highestDegree: string;
    institution: string;
    graduationYear: string;
  };
  program: {
    selectedProgram: string;
    startTerm: string;
  };
  documents: {
    transcripts: File[];
    recommendations: File[];
    statement: File[];
  };
}