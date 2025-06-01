# App Blueprint: Calisthenics Mastery Pro

## 1. Project Breakdown

**App Name:** Calisthenics Mastery Pro  
**Platform:** Web
**Summary:** A conversion-focused one-page website selling two digital calisthenics programs (free L-sit program and paid Beginner to Advanced program). The site combines compelling copy with a guided user flow to maximize conversions while maintaining premium aesthetics. The goal is to create a high-converting sales funnel with minimal friction.  

**Primary Use Case:**  
- Visitors land on the page and are guided through a structured sales journey  
- Users can download the free program (lead magnet) by providing email  
- Users can purchase the premium program through a seamless checkout  

**Authentication Requirements:**  
- Email/password auth via Supabase for user accounts  
- Social auth (Google) optional for faster checkout  
- No login required for free product download (just email collection)  

## 2. Tech Stack Overview

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

## 3. Core Features

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

## 4. User Flow

1. **Landing:**  
   - User arrives at hero section with headline "Master Bodyweight Fitness"  
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

## 5. Design & UI/UX Guidelines

**Visual Style:**  
- Color Scheme: Dark theme with neon accents (#00FF9D for CTAs)  
- Typography: Bold sans-serif (Inter) for headlines, clean body text  
- Imagery: High-energy calisthenics action shots  

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

## 6. Technical Implementation

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

## 7. Development Setup

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