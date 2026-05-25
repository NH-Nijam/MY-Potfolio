import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import StarBackground from '@/components/StarBackground';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'MD Nijam Hossen | MERN Stack Developer',
  description: 'Professional portfolio of MD Nijam Hossen, a MERN stack developer with 3 years of experience building robust web applications.',
  keywords: [
    'Nijam', 
    'Hossen', 
    'MD Nijam Hossen', 
    'Nijam Hossen', 
    'MERN Stack Developer', 
    'React Developer', 
    'Next.js Developer', 
    'Node.js Developer', 
    'Full Stack Developer', 
    'Web Developer', 
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'TypeScript Developer'
  ],
  authors: [{ name: 'MD Nijam Hossen', url: 'https://github.com/nijam-hossen' }], // you can update the github link
  creator: 'MD Nijam Hossen',
  publisher: 'MD Nijam Hossen',
  openGraph: {
    title: 'MD Nijam Hossen | MERN Stack Developer',
    description: 'Professional portfolio of MD Nijam Hossen, a MERN stack developer with 3 years of experience building robust web applications.',
    url: 'https://nijamhossen.vercel.app',
    siteName: 'MD Nijam Hossen Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You can place an og-image.jpg in your public folder
        width: 1200,
        height: 630,
        alt: 'MD Nijam Hossen Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MD Nijam Hossen | MERN Stack Developer',
    description: 'Professional portfolio of MD Nijam Hossen, a MERN stack developer with 3 years of experience building robust web applications.',
    creator: '@NijamHossen', // Update with actual twitter handle if you have one
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nijamhossen.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <StarBackground />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
