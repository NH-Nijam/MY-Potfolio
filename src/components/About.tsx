'use client';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, Terminal, Database, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-10 md:py-24 bg-[radial-gradient(circle_at_0%_50%,rgba(6,182,212,0.1),transparent_50%),radial-gradient(circle_at_100%_50%,rgba(16,185,129,0.05),transparent_50%)]">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full animate-breathe pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full animate-breathe [animation-delay:4s] pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-[clamp(2rem,5vw,3rem)] font-extrabold mb-6 md:mb-8 text-center bg-[linear-gradient(135deg,#06b6d4,#10b981)] bg-clip-text text-transparent animate-hue-cycle">Discover More About Me</h2>
          <div className="w-16 md:w-20 h-1 bg-[linear-gradient(135deg,#06b6d4,#10b981)] rounded-full -mt-4 md:-mt-6 animate-hue-cycle" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-center">
          <motion.div 
            className="animate-float [perspective:1000px]"
            initial={{ opacity: 0, scale: 0.8, rotateY: -30, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="group relative w-full max-w-[400px] aspect-[4/5] mx-auto rounded-3xl bg-zinc-900/40 border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:[transform:translateY(-10px)_rotateY(5deg)_rotateX(5deg)] hover:border-cyan-500/50">
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(6,182,212,0.1)_90deg,transparent_180deg)] animate-[spin_10s_linear_infinite] pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center text-center p-6 md:p-8 bg-neutral-900/60 backdrop-blur-md rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-white/10 group-hover:bg-neutral-900/70">
                <User size={64} className="text-cyan-400 mb-4 md:mb-6 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] md:w-20 md:h-20" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">MD Nijam Hossen</h3>
                <p className="text-sm md:text-base text-zinc-400 mb-4 md:mb-6">MERN Stack Developer</p>
                <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[linear-gradient(135deg,#06b6d4,#10b981)] text-white rounded-full text-xs md:text-sm font-semibold shadow-[0_4px_15px_rgba(6,182,212,0.4)]">
                  <Briefcase size={16} /> 3+ Years Exp.
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Hello there!</h3>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-3 md:mb-4">
                I am a passionate and dedicated <strong className="text-cyan-400 font-semibold">MERN Stack Developer</strong> with 3+ years of professional experience working in fast-paced office environments. I specialize in architecting scalable backend solutions and building highly interactive, responsive frontend interfaces.
              </p>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-3 md:mb-4">
                My focus is always on writing clean, maintainable code and providing seamless user experiences. I love tackling complex problems and transforming them into elegant, modern web applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-2 md:mt-4">
              <motion.div className="bg-white/5 border border-white/5 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:bg-cyan-500/5 hover:border-cyan-500/30 hover:-translate-y-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <Terminal className="text-cyan-400 mb-3 md:mb-4 w-5 h-5 md:w-6 md:h-6" />
                <h4 className="text-lg md:text-xl font-bold text-white mb-1.5 md:mb-2">Frontend Magic</h4>
                <p className="text-sm md:text-[0.95rem] text-zinc-400 leading-relaxed">React, Next.js, Framer Motion, Tailwind CSS</p>
              </motion.div>
              <motion.div className="bg-white/5 border border-white/5 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:bg-cyan-500/5 hover:border-cyan-500/30 hover:-translate-y-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <Server className="text-cyan-400 mb-3 md:mb-4 w-5 h-5 md:w-6 md:h-6" />
                <h4 className="text-lg md:text-xl font-bold text-white mb-1.5 md:mb-2">Backend Architecture</h4>
                <p className="text-sm md:text-[0.95rem] text-zinc-400 leading-relaxed">Node.js, Express, RESTful APIs, JWT Auth</p>
              </motion.div>
              <motion.div className="bg-white/5 border border-white/5 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:bg-cyan-500/5 hover:border-cyan-500/30 hover:-translate-y-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                <Database className="text-cyan-400 mb-3 md:mb-4 w-5 h-5 md:w-6 md:h-6" />
                <h4 className="text-lg md:text-xl font-bold text-white mb-1.5 md:mb-2">Database Management</h4>
                <p className="text-sm md:text-[0.95rem] text-zinc-400 leading-relaxed">MongoDB, Mongoose, Aggregations, Redis</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
