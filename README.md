# OmniSolve Tech Platform

A comprehensive IT and AI consultancy website built with React, TypeScript, and modern web technologies. OmniSolve Tech provides marketing and technology solutions that redefine business growth through IT automation, AI implementation, and strategic consulting.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive UI Components**: Powered by Radix UI and shadcn/ui
- **Lead Capture System**: Multiple specialized modals for different services
- **AI-Powered Chatbot**: Enhanced chatbot with semantic search and knowledge base
- **Service Portfolio**: Comprehensive showcase of IT, AI, and marketing services
- **Client Portal**: Secure client dashboard and admin portal
- **Database Integration**: Supabase backend for lead management
- **Form Validation**: React Hook Form with Zod schema validation
- **SEO Optimized**: Meta tags and structured content

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **shadcn/ui** - Beautiful UI component library
- **React Router** - Client-side routing
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend & Services
- **Supabase** - Backend as a Service (Database, Auth, Storage)
- **React Query** - Server state management
- **Lucide React** - Icon library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript ESLint** - TypeScript-specific linting

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd omnisolve-tech
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
Navigate to `http://localhost:5173`

## 🏗️ Build & Deployment

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment to Hostinger
1. Run production build: `npm run build`
2. Upload `dist/` folder contents to your Hostinger public_html directory
3. Configure DNS records as needed

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── chatbot/        # Chatbot system components
│   └── ...             # Feature components
├── pages/              # Route components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
└── main.tsx           # Application entry point
```

## 🎯 Key Components

### Core Pages
- **Landing Page** (`AppLayout.tsx`) - Main homepage with all sections
- **Service Pages** - AI Solutions, Business Diagnostics, Custom Websites, etc.
- **Client Portal** - Secure dashboard for clients
- **Admin Portal** - Management interface

### Lead Capture System
- `UniversalLeadCaptureModal` - Main lead capture form
- Service-specific modals for targeted lead generation
- Form validation and Supabase integration

### Chatbot System
- `EnhancedChatbotWidget` - Main chatbot interface
- `OmniResponseEngine` - AI response processing
- `SemanticSearchEngine` - Knowledge base search
- Comprehensive knowledge base for business queries

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.ts` with:
- Custom color palette
- Typography plugin
- Animation utilities

### Supabase Setup
Database tables:
- `leads` - Lead capture data
- `clients` - Client information
- `projects` - Project management

## 📊 Features Overview

### Services Offered
1. **AI Solutions** - Custom AI implementation and automation
2. **Business Diagnostics** - Comprehensive business analysis
3. **Custom Websites** - Professional web development
4. **Marketing Funnels** - Conversion-optimized sales funnels
5. **IT Systems Automation** - Business process automation

### Interactive Elements
- Animated hero section with tech background
- Service cards with hover effects
- Testimonials carousel
- FAQ accordion
- Contact forms with validation
- Live chatbot assistance

## 🚀 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Functional components with hooks
- Tailwind for styling
- Component composition pattern

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📝 License

This project is proprietary software developed for OmniSolve Tech.

## 📞 Support

For technical support or questions:
- Email: support@omnisolvetech.com
- Website: [OmniSolve Tech Platform](https://omnisolvetech.com)

---

Built with ❤️ by the OmniSolve Tech team
