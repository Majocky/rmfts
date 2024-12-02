import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: 'bib-101',
    title: 'Introduction to Biblical Studies',
    description: 'A foundational course exploring the structure, themes, and interpretation of both Old and New Testaments.',
    duration: '12 weeks',
    level: 'Beginner',
    credits: 3,
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    category: 'Biblical Studies',
  },
  {
    id: 'theo-201',
    title: 'Systematic Theology',
    description: 'An examination of major theological doctrines, including God, salvation, and eschatology.',
    duration: '16 weeks',
    level: 'Intermediate',
    credits: 4,
    image: 'https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    category: 'Theology',
  },
  {
    id: 'min-301',
    title: 'Pastoral Ministry',
    description: 'Practical training in pastoral care, counseling, and church leadership.',
    duration: '14 weeks',
    level: 'Advanced',
    credits: 4,
    image: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    category: 'Ministry',
  },
  {
    id: 'lead-201',
    title: 'Christian Leadership',
    description: 'Developing effective leadership skills within a biblical framework.',
    duration: '12 weeks',
    level: 'Intermediate',
    credits: 3,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    category: 'Leadership',
  },
];