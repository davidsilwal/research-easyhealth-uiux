// EasyCare 365 Static Mock Data

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  subscriptionPlan: string;
  subscriptionStatus: "active" | "pending" | "cancelled" | "expired";
  joinedDate: string;
  nextBillingDate: string;
}

export interface Patient {
  id: string;
  customerId: string;
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  address: string;
  city: string;
  phone: string;
  emergencyContact: string;
  healthConditions: string[];
  assignedCoordinator: string;
  lastVisitDate: string;
  nextScheduledVisit: string;
}

export interface ServiceActivity {
  id: string;
  patientId: string;
  type: "home_visit" | "telehealth" | "nemt" | "lab_collection" | "pharmacy" | "checkup";
  date: string;
  status: "completed" | "scheduled" | "cancelled";
  notes: string;
  coordinator: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
}

// Pricing Plans
export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "EasyCare 365 Basic",
    price: 365,
    period: "year",
    description: "Essential care package for peace of mind",
    features: [
      "Annual comprehensive health check-up",
      "4 home health visits per year",
      "2 NEMT (Non-Emergency Medical Transport) trips",
      "Dedicated care coordinator support",
      "24/7 emergency helpline access",
      "Monthly health status reports",
      "Medication reminder service",
    ],
  },
  {
    id: "plus",
    name: "EasyCare 365 Plus",
    price: 499,
    period: "year",
    description: "Enhanced care with more frequent visits",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Everything in Basic, plus:",
      "6 home health visits per year",
      "4 NEMT trips per year",
      "2 teleconsultation credits",
      "Priority appointment scheduling",
      "Lab sample collection at home",
      "Pharmacy delivery service (4x)",
      "Bi-weekly health status reports",
    ],
  },
  {
    id: "premium",
    name: "EasyCare 365 Premium",
    price: 699,
    period: "year",
    description: "Comprehensive care with dedicated manager",
    badge: "Best Value",
    features: [
      "Everything in Plus, plus:",
      "Monthly nurse visits",
      "Chronic disease monitoring",
      "Unlimited pharmacy refill delivery",
      "Dedicated personal care manager",
      "Weekly teleconsultation access",
      "Priority hospital admission assistance",
      "Detailed weekly health reports",
      "Family video consultation (monthly)",
    ],
  },
];

// Mock Customers (Diaspora in Australia)
export const mockCustomers: Customer[] = [
  {
    id: "c1",
    name: "Aarav Sharma",
    email: "aarav.sharma@email.com.au",
    phone: "+61 412 345 678",
    country: "Australia",
    city: "Sydney",
    subscriptionPlan: "premium",
    subscriptionStatus: "active",
    joinedDate: "2024-03-15",
    nextBillingDate: "2025-03-15",
  },
  {
    id: "c2",
    name: "Priya Thapa",
    email: "priya.thapa@email.com.au",
    phone: "+61 423 456 789",
    country: "Australia",
    city: "Melbourne",
    subscriptionPlan: "plus",
    subscriptionStatus: "active",
    joinedDate: "2024-06-20",
    nextBillingDate: "2025-06-20",
  },
  {
    id: "c3",
    name: "Bikash Gurung",
    email: "bikash.g@email.com.au",
    phone: "+61 434 567 890",
    country: "Australia",
    city: "Brisbane",
    subscriptionPlan: "basic",
    subscriptionStatus: "active",
    joinedDate: "2024-09-10",
    nextBillingDate: "2025-09-10",
  },
];

// Mock Patients (Elderly in Nepal)
export const mockPatients: Patient[] = [
  {
    id: "p1",
    customerId: "c1",
    name: "Ram Bahadur Sharma",
    age: 72,
    gender: "male",
    address: "Naxal, Kathmandu",
    city: "Kathmandu",
    phone: "+977 98XXXXXXXX",
    emergencyContact: "+977 98XXXXXXXX",
    healthConditions: ["Diabetes Type 2", "Hypertension"],
    assignedCoordinator: "Sita Devi Khadka",
    lastVisitDate: "2024-12-15",
    nextScheduledVisit: "2025-01-15",
  },
  {
    id: "p2",
    customerId: "c1",
    name: "Sarita Devi Sharma",
    age: 68,
    gender: "female",
    address: "Naxal, Kathmandu",
    city: "Kathmandu",
    phone: "+977 98XXXXXXXX",
    emergencyContact: "+977 98XXXXXXXX",
    healthConditions: ["Arthritis", "Mild Vision Impairment"],
    assignedCoordinator: "Sita Devi Khadka",
    lastVisitDate: "2024-12-15",
    nextScheduledVisit: "2025-01-15",
  },
  {
    id: "p3",
    customerId: "c2",
    name: "Hari Prasad Thapa",
    age: 75,
    gender: "male",
    address: "Pokhara-8, Kaski",
    city: "Pokhara",
    phone: "+977 98XXXXXXXX",
    emergencyContact: "+977 98XXXXXXXX",
    healthConditions: ["COPD", "Heart Disease"],
    assignedCoordinator: "Mina Gurung",
    lastVisitDate: "2024-12-20",
    nextScheduledVisit: "2025-01-05",
  },
  {
    id: "p4",
    customerId: "c3",
    name: "Dhan Kumari Gurung",
    age: 70,
    gender: "female",
    address: "Bharatpur-10, Chitwan",
    city: "Chitwan",
    phone: "+977 98XXXXXXXX",
    emergencyContact: "+977 98XXXXXXXX",
    healthConditions: ["Osteoporosis"],
    assignedCoordinator: "Ramesh Adhikari",
    lastVisitDate: "2024-12-22",
    nextScheduledVisit: "2025-01-22",
  },
];

// Service Activities
export const mockActivities: ServiceActivity[] = [
  {
    id: "a1",
    patientId: "p1",
    type: "home_visit",
    date: "2024-12-15",
    status: "completed",
    notes: "Regular health check completed. Blood pressure normal. Medication reviewed.",
    coordinator: "Sita Devi Khadka",
  },
  {
    id: "a2",
    patientId: "p1",
    type: "pharmacy",
    date: "2024-12-18",
    status: "completed",
    notes: "Monthly medication delivered. Metformin, Amlodipine.",
    coordinator: "Sita Devi Khadka",
  },
  {
    id: "a3",
    patientId: "p2",
    type: "telehealth",
    date: "2024-12-20",
    status: "completed",
    notes: "Video consultation with Dr. Shrestha. Arthritis management discussed.",
    coordinator: "Sita Devi Khadka",
  },
  {
    id: "a4",
    patientId: "p3",
    type: "nemt",
    date: "2024-12-20",
    status: "completed",
    notes: "Transport to Manipal Hospital for cardiology appointment.",
    coordinator: "Mina Gurung",
  },
  {
    id: "a5",
    patientId: "p1",
    type: "home_visit",
    date: "2025-01-15",
    status: "scheduled",
    notes: "Monthly health assessment scheduled.",
    coordinator: "Sita Devi Khadka",
  },
  {
    id: "a6",
    patientId: "p3",
    type: "lab_collection",
    date: "2025-01-05",
    status: "scheduled",
    notes: "Quarterly blood work and cardiac markers.",
    coordinator: "Mina Gurung",
  },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sunita K.",
    location: "Sydney, Australia",
    quote: "Living thousands of miles away, I always worried about my parents' health. EasyCare 365 has given me peace of mind. The coordinators are so caring and keep me updated regularly.",
    avatar: "SK",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rajesh M.",
    location: "Melbourne, Australia",
    quote: "For just $1 a day, I know my father is getting the care he needs. The NEMT service has been a lifesaver for his hospital appointments.",
    avatar: "RM",
    rating: 5,
  },
  {
    id: "t3",
    name: "Anita T.",
    location: "Brisbane, Australia",
    quote: "The teleconsultation feature lets me join video calls with my mother's doctor. It feels like I'm right there with her. Highly recommend!",
    avatar: "AT",
    rating: 5,
  },
];

// How it Works Steps
export const howItWorksSteps = [
  {
    step: 1,
    title: "Subscribe Online",
    description: "Choose your plan and complete the subscription from anywhere in Australia. Pay securely with Visa, Mastercard, or PayPal.",
    icon: "CreditCard",
  },
  {
    step: 2,
    title: "Register Your Loved One",
    description: "Provide details about your parent or elderly family member in Nepal. Our care coordinator will reach out to them directly.",
    icon: "UserPlus",
  },
  {
    step: 3,
    title: "Onboarding Assessment",
    description: "Our local team conducts a comprehensive health assessment and creates a personalized care plan.",
    icon: "ClipboardCheck",
  },
  {
    step: 4,
    title: "Continuous Care",
    description: "Enjoy peace of mind with regular health monitoring, home visits, and transparent reporting throughout the year.",
    icon: "HeartPulse",
  },
];

// Stats
export const stats = [
  { value: "500+", label: "Families Served" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
  { value: "50+", label: "Care Coordinators" },
];

// Features for different sections
export const keyFeatures = [
  {
    title: "Home Health Visits",
    description: "Qualified nurses visit your loved ones at their home for regular health checkups and monitoring.",
    icon: "Home",
  },
  {
    title: "Teleconsultation",
    description: "Connect with qualified doctors through video calls. Family members can join remotely.",
    icon: "Video",
  },
  {
    title: "Medical Transport",
    description: "Safe and comfortable non-emergency transportation for hospital visits and appointments.",
    icon: "Ambulance",
  },
  {
    title: "Pharmacy Delivery",
    description: "Medications delivered directly to your parent's doorstep with proper instructions.",
    icon: "Pill",
  },
  {
    title: "Lab Collection",
    description: "Blood samples and lab tests conducted at home. Results shared digitally.",
    icon: "TestTube",
  },
  {
    title: "Care Coordination",
    description: "Dedicated coordinator manages all appointments, reports, and family communication.",
    icon: "Users",
  },
];

// Australian cities for customer registration
export const australianCities = [
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Gold Coast",
  "Canberra",
  "Newcastle",
  "Hobart",
  "Darwin",
];

// Nepali cities for patient registration
export const nepaliCities = [
  "Kathmandu",
  "Pokhara",
  "Lalitpur",
  "Bharatpur",
  "Biratnagar",
  "Birgunj",
  "Dharan",
  "Butwal",
  "Hetauda",
  "Nepalgunj",
];

// Common health conditions
export const healthConditions = [
  "Diabetes Type 1",
  "Diabetes Type 2",
  "Hypertension",
  "Heart Disease",
  "COPD",
  "Arthritis",
  "Osteoporosis",
  "Alzheimer's/Dementia",
  "Vision Impairment",
  "Hearing Impairment",
  "Kidney Disease",
  "Thyroid Disorder",
  "Other",
];
