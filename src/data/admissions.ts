import { AdmissionRequirement, Program } from '../types/admission';

export const requirements: AdmissionRequirement[] = [
  {
    id: 'req-1',
    title: 'Academic Transcripts',
    description: 'Official transcripts from all previous academic institutions',
    required: true,
  },
  {
    id: 'req-2',
    title: 'Statement of Purpose',
    description: 'A 500-word essay describing your calling and ministry goals',
    required: true,
  },
  {
    id: 'req-3',
    title: 'Letters of Recommendation',
    description: 'Two letters of recommendation from spiritual leaders',
    required: true,
  },
  {
    id: 'req-4',
    title: 'Church Affiliation',
    description: 'Current church membership and involvement',
    required: true,
  },
];

export const programs: Program[] = [
  {
    id: 'cert-biblical-studies',
    name: 'Certificate in Biblical Studies',
    type: 'Certificate',
    duration: '1 year',
    requirements: requirements.slice(0, 2),
  },
  {
    id: 'dip-theology',
    name: 'Diploma in Theology',
    type: 'Diploma',
    duration: '2 years',
    requirements: requirements.slice(0, 3),
  },
  {
    id: 'deg-ministry',
    name: 'Bachelor of Ministry',
    type: 'Degree',
    duration: '4 years',
    requirements: requirements,
  },
];