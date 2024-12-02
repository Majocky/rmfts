export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  credits: number;
  image: string;
  category: 'Biblical Studies' | 'Theology' | 'Ministry' | 'Leadership';
}