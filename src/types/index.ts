export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType;
}

export interface TestimonialType {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface EventType {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}