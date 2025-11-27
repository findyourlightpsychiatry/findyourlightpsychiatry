# Find Your Light Psychiatry PLLC

Compassionate, evidence-based mental health care for adults, children, and adolescents throughout Washington State.

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Resend** - Email service

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Environment Variables

Required environment variables (set in `.env.local` or deployment platform):

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_contact_email
RESEND_FROM="Your Name <noreply@yourdomain.com>"
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## Deployment

Deploy on [Vercel](https://vercel.com) or any platform that supports Next.js.

The site is optimized and ready for production deployment.
