/*
 * @Author: nh-nijam nijamhossen64@gmail.com
 * @Date: 2026-05-23 13:03:07
 * @LastEditors: nh-nijam nijamhossen64@gmail.com
 * @LastEditTime: 2026-05-23 16:01:24
 * @FilePath: \protfolio\src\components\Navbar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-[#06040f]/70 backdrop-blur-md  shadow-lg' : 'py-5 bg-transparent'}`}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold tracking-tight text-white hover:opacity-80 transition-opacity">
          MD Nijam <span className="text-blue-500 animate-hue-cycle inline-block">  Hossen</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-zinc-300 font-medium text-sm tracking-wide hover:text-blue-400 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-[#06040f]/95 backdrop-blur-xl border-b border-white/10 flex flex-col p-6 gap-4 shadow-xl md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-300 text-lg font-medium hover:text-blue-400 transition-colors py-3 border-b border-white/5 last:border-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
