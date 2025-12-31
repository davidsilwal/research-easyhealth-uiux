# EasyCare 365 – Annual Parental Care Subscription

**"Care for your loved ones, from anywhere in the world."**

A modern React/Next.js application providing a healthcare subscription service for Nepali diaspora in Australia to care for their elderly parents living in Nepal.

![Landing Page Hero](https://github.com/user-attachments/assets/521907cf-ee2d-4484-a4b7-235c9b776918)

## 🌟 Features

- **Modern UI/UX Design** - Built with Tailwind CSS v4, Radix UI, and custom Shadcn-inspired components
- **Responsive Design** - Mobile-first approach with seamless experience across all devices
- **Customer Onboarding** - Multi-step subscription flow for diaspora customers in Australia
- **Patient Registration** - Easy registration for elderly family members in Nepal
- **Dashboard** - Comprehensive care management interface with activity tracking
- **Static Mock Data** - Pre-populated data for demonstration purposes

## 💰 Pricing Plans

| Plan | Annual Fee | Key Highlights |
|------|------------|----------------|
| **EasyCare 365 Basic** | $365/year | Annual check-up, 4 home visits, 2 NEMT uses |
| **EasyCare 365 Plus** | $499/year | 6 home visits, 4 NEMT trips, teleconsultation credits |
| **EasyCare 365 Premium** | $699/year | Monthly nurse visits, chronic disease monitoring, dedicated care manager |

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives with custom Shadcn-inspired components
- **Icons**: Lucide React
- **Fonts**: System fonts for optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📱 Pages

1. **Landing Page** (`/`) - Hero section, features, pricing, testimonials, and CTA
2. **Customer Onboarding** (`/onboarding/customer`) - 4-step subscription flow
3. **Patient Registration** (`/onboarding/patient`) - 3-step patient onboarding
4. **Dashboard** (`/dashboard`) - Care management and subscription overview

## 🎨 Screenshots

### Pricing Section
![Pricing](https://github.com/user-attachments/assets/3f820003-047f-4854-82e9-1537470f396c)

### Customer Onboarding
![Customer Onboarding](https://github.com/user-attachments/assets/1f7b6603-515a-49a3-8fbc-1684096b3194)

### Dashboard
![Dashboard](https://github.com/user-attachments/assets/ecd29669-a8c2-4a6d-9067-96a358942549)

### Patient Registration
![Patient Registration](https://github.com/user-attachments/assets/5c90d346-a017-4993-8097-228fc045debc)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard page
│   └── onboarding/
│       ├── customer/
│       │   └── page.tsx      # Customer onboarding
│       └── patient/
│           └── page.tsx      # Patient registration
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── sections/             # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── ...
│   ├── Header.tsx
│   └── Footer.tsx
├── data/
│   └── mockData.ts           # Static mock data
└── lib/
    └── utils.ts              # Utility functions
```

## 🎯 Key Value Propositions

### For Nepali Diaspora in Australia
- Peace of mind knowing parents are under supervised care
- Transparent reporting and communication
- Trusted local healthcare network
- Affordable, all-inclusive care for $1/day

### For Parents in Nepal
- Regular health monitoring and early intervention
- Comfortable, coordinated hospital access
- Personalized, compassionate care at home

## 📝 License

This project is for demonstration and research purposes.
