# Company Blueprint: Monava – Home Fitness, No Equipment Needed

## 1. Company Overview

**Business Name:** Monava  
**Platform:** Web (with future mobile expansion)  
**Mission:** To empower anyone, anywhere to start their fitness journey from home—no gym, no equipment, no barriers. Monava leverages AI, expert programming, and a supportive community to make movement accessible to all.

**Vision:** Become the global leader in equipment-free, home-based fitness, helping millions build strength, confidence, and consistency—starting from their living room.

**Target Audience:**
- People without access to gyms or equipment
- Beginners intimidated by traditional fitness spaces
- Youth, students, busy professionals, parents, and anyone seeking flexible, at-home training

**Market Positioning:**
Monava is the first digital fitness company dedicated 100% to equipment-free, home-based calisthenics. We combine AI-powered coaching, science-backed programs, and a vibrant online community to remove all barriers to starting and sustaining a fitness journey.

---

## 2. Website Structure: Monava

### 🌐 Logo and Navigation
- **Logo:** Top-left corner (Monava branding)
- **Nav Bar (right):**
  - Home
  - Train
  - Pricing
  - About
  - Impact
  - Contact

---

## 🏠 Home Page
### Headline:
**Start Your Fitness Journey — No Gym Needed**  
Monava helps people around the world train calisthenics from home using AI-powered tools, expert-based programming, and a mission to make movement more accessible.

### Supporting Stats:
- 🏠 60% of global youth lack access to a gym or personal trainer
- 🌎 Monava has supported over **10,000+ students** worldwide
- 📉 Over 70% of users reported improved consistency in workouts after using Monava

### Why Trust Monava:
Monava is powered by a custom-trained ChatBot built from:  
- 🔬 Scientifically backed calisthenics data  
- 🧠 Knowledge from elite athletes & bodyweight experts  
- 💪 Personal experience of founder **Benjamin Gershenovich**, who has helped **350K+ people** across social media platforms:
  - 130K+ on TikTok
  - 250K+ on Instagram
  - 17K+ on YouTube

---

## 🏋️ Train
**Explore Monava's Tools:**

### 📘 Monava ChatBot (Free)
A custom-trained AI assistant using verified calisthenics science and elite coaching advice to help users:
- Build beginner routines
- Fix their form
- Ask questions in real-time

### 🔁 RepBot (Free)
Tracks your body using joint-angle detection (MediaPipe). 
- Covers 7 key bodyweight exercises
- Gives feedback and counts your reps

### 🪑 L-Sit Program (Free)
Step-by-step program designed to help you achieve your first L-sit using smart regressions, tracking, and consistency.

---
### Want more tools? 
**Upgrade to Monava Pro.**

---

## 💸 Pricing

### 🟢 **Monava Free** – $0 forever
- ChatBot (with scientific, expert, and personal training data)
- L-Sit Program
- RepBot (7 exercise tracker)

### 🔵 **Monava Pro** – $15 (one-time)
- Everything in Free
- 13 Skill-Based Calisthenics Programs (weekly format)
- Access to the Private Community

---

## 👤 About
### The Story Behind Monava
I'm Benjamin Gershenovich. Growing up, I was never allowed access to a gym until I was 15. I spent years trying to figure out how to get stronger from my own bedroom — and now I want to make that process easier for others.

Monava was born out of that challenge. It started as a project, then a movement, and now a company — one dedicated to making training at home not just possible, but empowering.

### Founder:
**Benjamin Gershenovich**  
- Creator & Calisthenics Coach
- 350,000+ social media followers across:
  - TikTok (130K+)
  - Instagram (250K+)
  - YouTube (17K+)

---

## 🌍 Impact
### Our Reach:
- Over **10,000+ students** across the U.S. and globally
- Used in schools, youth clubs, and homes

### Visual Map:
(Map will be embedded showing pins of major user locations)

### Community Images:
(Section with carousel or grid of real users training with Monava — transformations, form practice, L-sits, etc.)

---

## ✉️ Contact
Need help or want to reach out?
- Email: **support@monava.com**

---

## 3. Tech Stack Overview

**Frontend Framework:**  
- React + Next.js (App Router) for SSR and optimized performance  

**UI Library:**  
- Tailwind CSS for utility-first styling  
- ShadCN for accessible, pre-built components (buttons, forms, etc.)  

**Backend (BaaS):**  
- Supabase for:  
  - User authentication  
  - Product data storage  
  - Transaction records  
  - Email collection  

**Deployment:**  
- Vercel for seamless Next.js deployment with edge functions  

## 4. Core Features

**Conversion-Focused Landing Page:**  
- Hero section with compelling headline and CTA  
- Problem/solution breakdown with social proof  
- Program benefits carousel  

**Guided Sales Funnel:**  
- Step-by-step script flow (scroll-triggered animations)  
- Embedded testimonial videos  
- FAQ accordion to address objections  

**Product Delivery System:**  
- Free program: Instant email delivery via Supabase edge function  
- Paid program: Secure checkout with Stripe integration  
- Downloadable PDFs with progress tracking  

**Analytics & Optimization:**  
- Vercel Analytics for traffic monitoring  
- A/B testing capabilities for CTAs  
- Heatmap integration points  

## 5. User Flow

1. **Landing:**  
   - User arrives at hero section with headline "Start Your Fitness Journey — No Gym Needed"  
   - Immediate CTA: "Get Free L-Sit Program" (primary button)  

2. **Lead Capture:**  
   - Smooth scroll to benefits section  
   - Email collection modal (non-blocking) for free program  
   - Supabase stores email and triggers automated delivery  

3. **Sales Journey:**  
   - Progressive disclosure of program features  
   - Embedded video testimonials auto-play on scroll  
   - Comparison table between free/paid programs  

4. **Checkout Flow:**  
   - One-click upsell from free to paid program  
   - Supabase-authenticated checkout (minimal fields)  
   - Post-purchase onboarding sequence  

5. **Post-Conversion:**  
   - Download dashboard for purchased products  
   - Email sequence for engagement  

## 6. Design & UI/UX Guidelines

**Visual Style:**  
- Color Scheme: Dark theme with neon accents (#00FF9D for CTAs)  
- Typography: Bold sans-serif (Inter) for headlines, clean body text  
- Imagery: High-energy calisthenics action shots (home settings, no equipment)  

**Conversion Principles:**  
- Above-the-fold CTA always visible (sticky header)  
- Progressive disclosure of information (no content dumping)  
- Scarcity elements (limited-time bonuses)  

**Component Library (ShadCN):**  
- Customized button variants for primary/secondary CTAs  
- Animated progress stepper for sales journey  
- Responsive pricing cards with hover effects  

**Micro-interactions:**  
- Button hover effects with subtle scale transforms  
- Scroll-triggered animations for testimonials  
- Confetti burst on purchase completion  

## 7. Technical Implementation

**Next.js Structure:**  
```
app/
  layout.tsx (Root layout with providers)
  page.tsx (Main landing page)
  /products
    /[slug] (Dynamic product pages)
  /dashboard (Protected user area)
```

**Supabase Integration:**  
1. Set up auth with email/password + Google  
2. Products table with:  
   - id (UUID)  
   - name (text)  
   - price (numeric)  
   - description (text)  
   - download_url (text)  
3. Transactions table for purchases  

**Key Functions:**  
- Free product delivery: Edge function triggers SendGrid email  
- Purchase flow: Server action handles Stripe checkout  
- Protected routes: Middleware verifies auth status  

**Performance Optimizations:**  
- Static product data with ISR revalidation  
- Lazy-loaded video components  
- Optimized image components  

## 8. Development Setup

**Requirements:**  
- Node.js v18+  
- Supabase account  
- Vercel account  
- Stripe account  

**Setup Instructions:**  
1. Clone template:  
```bash
npx create-next-app -e https://github.com/shadcn/next-template
```

2. Install dependencies:  
```bash
npm install @supabase/supabase-js @supabase/ssr @stripe/stripe-js
```

3. Configure environment:  
```env
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
STRIPE_SECRET_KEY=your-key
```

4. Initialize Supabase:  
```ts
// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

5. Deploy:  
```bash
vercel --prod
```