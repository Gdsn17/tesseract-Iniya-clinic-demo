export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  review: string;
  rating: number;
  date: string;
  avatarLetter: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const CLINIC_INFO = {
  name: 'Iniya Clinic',
  category: 'General Clinic / Hospital',
  phone: '088256 70588',
  phoneRaw: '+918825670588',
  address: 'Water Tank Stop, 460, Vengamedu, Karur, Tamil Nadu 639006',
  googleRating: 5.0,
  reviewCount: 4,
  locationDescription: 'Conveniently located at Water Tank Stop in Vengamedu, Karur. Easy access for patients and families.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Iniya+Clinic+Water+Tank+Stop+460+Vengamedu+Karur+Tamil+Nadu+639006',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.654714152864!2d78.0700!3d10.9700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU4JzEyLjAiTiA3OMKwMDQnMTIuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',
  tagline: 'Trusted Care for You & Your Family',
  subheading: 'Iniya Clinic provides patient-friendly, affordable and dependable healthcare for individuals and families in Karur.',
  whatsappText: 'Hello Iniya Clinic, I would like to enquire about a doctor consultation in Vengamedu, Karur.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'general-consultation',
    title: 'General Consultation',
    description: 'Professional consultation for common health concerns and general outpatient care.',
    iconName: 'Stethoscope',
    badge: 'Core Care',
  },
  {
    id: 'family-healthcare',
    title: 'Family Healthcare',
    description: 'Accessible healthcare support for individuals and families in the local community.',
    iconName: 'Users',
    badge: 'All Ages',
  },
  {
    id: 'follow-up-care',
    title: 'Follow-Up Care',
    description: 'Continued guidance, recovery assessment, and follow-up based on patient needs.',
    iconName: 'Activity',
    badge: 'Recovery',
  },
  {
    id: 'preventive-health',
    title: 'Preventive Health Guidance',
    description: 'General health advice, routine wellness checks, and preventative lifestyle guidance.',
    iconName: 'ShieldCheck',
    badge: 'Wellness',
  },
  {
    id: 'minor-concerns',
    title: 'Minor Health Concerns',
    description: 'Prompt consultation for everyday medical concerns, seasonal illnesses, and discomforts.',
    iconName: 'HeartHandshake',
    badge: 'Everyday Care',
  },
  {
    id: 'health-monitoring',
    title: 'Health Check Guidance',
    description: 'Support and clinical guidance for routine health monitoring and vital indicators.',
    iconName: 'FileCheck2',
    badge: 'Guidance',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Mohan Raj Gurusamy',
    review: 'Best doctor in town. Low fees and quality care.',
    rating: 5,
    date: 'Verified Patient',
    avatarLetter: 'M',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Kesiya Shree',
    review: 'Very neat, clean and gentle care',
    rating: 5,
    date: 'Verified Patient',
    avatarLetter: 'K',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'THIRUKUMARAVEL R',
    review: 'Best In town',
    rating: 5,
    date: 'Verified Patient',
    avatarLetter: 'T',
    verified: true,
  },
];

export const TRUST_POINTS = [
  {
    title: 'Patient-Friendly Care',
    description: 'A welcoming approach focused on listening and understanding patient concerns.',
    iconName: 'Heart',
  },
  {
    title: 'Affordable Healthcare',
    description: 'Quality consultation without unnecessary complexity or inflated costs.',
    iconName: 'BadgePercent',
  },
  {
    title: 'Clean & Comfortable',
    description: 'A neat, hygienic, and calm environment for patients and families.',
    iconName: 'Sparkles',
  },
  {
    title: 'Local & Accessible',
    description: 'Conveniently located at Water Tank Stop in Vengamedu, Karur.',
    iconName: 'MapPin',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need an appointment?',
    answer: 'Contact the clinic directly at 088256 70588 to confirm availability and consultation timing. Walk-in visits are also accommodated based on consultation hours.',
  },
  {
    id: 'faq-2',
    question: 'Where is Iniya Clinic located?',
    answer: 'Iniya Clinic is conveniently located at Water Tank Stop, 460, Vengamedu, Karur, Tamil Nadu 639006, with easy access from all major parts of Karur.',
  },
  {
    id: 'faq-3',
    question: 'How can I contact the clinic?',
    answer: 'You can call the clinic directly at 088256 70588, send a message through the website enquiry form, or reach out on WhatsApp for quick inquiries.',
  },
  {
    id: 'faq-4',
    question: 'What kind of care does the clinic provide?',
    answer: 'Iniya Clinic provides general patient consultation, family healthcare support, routine follow-up care, and preventive health guidance for everyday medical needs.',
  },
  {
    id: 'faq-5',
    question: 'Is consultation affordable at Iniya Clinic?',
    answer: 'Yes, patients consistently highlight our reasonable fees and quality care. We are committed to keeping everyday healthcare accessible to everyone in Karur.',
  },
];
