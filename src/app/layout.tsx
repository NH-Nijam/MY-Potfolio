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
