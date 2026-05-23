'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-10 md:py-24 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_60%)]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,rgba(15,23,42,0)_70%)] z-0 rounded-full pointer-events-none animate-blob" />
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-blue-500/10 blur-[80px] z-0 rounded-full pointer-events-none animate-blob [animation-delay:2s]" />
      
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8"
          >
            <Code2 size={16} />
            <span>MERN Stack Developer</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            className="text-4xl sm:text-5xl md:text-[clamp(3rem,8vw,5rem)] font-extrabold leading-[1.1] mb-4 md:mb-6 text-white"
          >
            Hi, I'm <span className="bg-[linear-gradient(135deg,#3b82f6,#2563eb)] bg-clip-text text-transparent animate-hue-cycle inline-block">MD Nijam Hossen</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-[600px] mb-8 md:mb-12 leading-relaxed"
          >
            I build professional, responsive, and animated web applications. With 3+ years of office experience, I specialize in transforming ideas into robust digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full sm:w-auto"
          >
            <a href="#projects" className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all duration-300 bg-[linear-gradient(135deg,#3b82f6,#2563eb)] text-white shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,130,246,0.5)]">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all duration-300 bg-zinc-900/40 text-white border border-white/10 hover:bg-white/5 hover:-translate-y-0.5">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
