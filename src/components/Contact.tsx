'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/nijamhossen64@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000); // Reset status after 5s
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-10 md:py-24 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.1),transparent_70%)] overflow-hidden">
      {/* Animated Background Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.15),transparent_70%)] z-0 rounded-full pointer-events-none animate-breathe" />
      
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-[clamp(2rem,5vw,3rem)] font-extrabold mb-6 md:mb-8 text-center bg-[linear-gradient(135deg,#10b981,#059669)] bg-clip-text text-transparent animate-hue-cycle">Get In Touch</h2>
          <div className="w-16 md:w-20 h-1 bg-[linear-gradient(135deg,#10b981,#059669)] rounded-full -mt-4 md:-mt-6 animate-hue-cycle" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -80, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Let's Connect</h3>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-8 md:mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-blue-500/10 text-emerald-500 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm text-zinc-400 mb-0.5 md:mb-1 uppercase tracking-wider">Email</h4>
                  <p className="text-base md:text-lg text-white font-medium break-all">nijamhossen64@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-blue-500/10 text-emerald-500 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm text-zinc-400 mb-0.5 md:mb-1 uppercase tracking-wider">Phone</h4>
                  <p className="text-base md:text-lg text-white font-medium">01786469884, 01581880956</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-blue-500/10 text-emerald-500 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm text-zinc-400 mb-0.5 md:mb-1 uppercase tracking-wider">Location</h4>
                  <p className="text-base md:text-lg text-white font-medium">Khulna, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-blue-500/10 text-emerald-500 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <MessageCircle size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm text-zinc-400 mb-0.5 md:mb-1 uppercase tracking-wider">WhatsApp</h4>
                  <a href="https://wa.me/8801786469884" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg text-white font-medium hover:text-emerald-500 transition-colors">
                    01786469884
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 80, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10"
          >
            <form className="flex flex-col gap-4 md:gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <input type="text" name="name" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-emerald-500 focus:bg-black/30" placeholder="Your Name" required />
              </div>
              <div className="flex flex-col">
                <input type="email" name="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-emerald-500 focus:bg-black/30" placeholder="Your Email" required />
              </div>
              <div className="flex flex-col">
                <input type="text" name="subject" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-emerald-500 focus:bg-black/30" placeholder="Subject" required />
              </div>
              <div className="flex flex-col">
                <textarea name="message" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-emerald-500 focus:bg-black/30 resize-y min-h-[100px] md:min-h-[120px]" placeholder="Your Message" rows={5} required></textarea>
              </div>
              
              <input type="hidden" name="_captcha" value="false" />
              
              <button 
                type="submit" 
                className={`inline-flex items-center justify-center gap-2 md:gap-3 bg-[linear-gradient(135deg,#10b981,#059669)] text-white p-4 md:p-5 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 mt-2 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)] disabled:opacity-70 disabled:cursor-not-allowed ${status === 'success' ? '!bg-[#10b981] shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)] pointer-events-none' : ''}`}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 
                 status === 'success' ? <><CheckCircle2 size={18} /> Sent Successfully</> : 
                 <>Send Message <Send size={18} /></>}
              </button>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center mt-2">Oops! Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
