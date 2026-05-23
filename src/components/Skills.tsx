'use client';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Redux Toolkit', level: 80 },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 92 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 75 },
    ]
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'Mongoose', level: 92 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'TypeScript', level: 85 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-10 md:py-24 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.05),transparent_50%)]">
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-pink-500/10 blur-[80px] rounded-full animate-breathe pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-orange-500/5 blur-[100px] rounded-full animate-breathe [animation-delay:2s] pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl md:text-[clamp(2rem,5vw,3rem)] font-extrabold mb-6 md:mb-8 text-center bg-[linear-gradient(135deg,#ec4899,#f97316)] bg-clip-text text-transparent animate-hue-cycle">Technical Expertise</h2>
          <div className="w-16 md:w-20 h-1 bg-[linear-gradient(135deg,#ec4899,#f97316)] rounded-full -mt-4 md:-mt-6 animate-hue-cycle" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 md:gap-10">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, type: "spring", stiffness: 100, bounce: 0.3 }}
              className="group bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 transition-all duration-500 relative overflow-hidden hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Top gradient line that animates on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(135deg,#ec4899,#f97316)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 md:mb-8 inline-block">{category.title}</h3>
              <div className="flex flex-col gap-4 md:gap-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-zinc-400 text-base transition-colors duration-300 group-hover:text-white">{skill.name}</span>
                      <span className="text-pink-500 font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[linear-gradient(135deg,#ec4899,#f97316)] rounded-full relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + (index * 0.1) }}
                      >
                        <div className="absolute top-0 right-0 w-2.5 h-full bg-white/50 blur-[2px] rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
