'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const ProjectsData = [
  {
    id: 1,
    img: "/projectImg/nijam.png",
    title: "My Portfolio",
    description:
      "Assalamu Alaikum I am Md. Nijam Hossen, This is my portfolio. This site has been created using html, tailwindcss, next js. You will find all my information on this website.",
    techno: "React js, Tailwind Css, Next js",
    live: "https://nijam-hossen-ed9e.vercel.app/",
    repo: "https://github.com/NH-Nijam/NijamHossen",
  },
  {
    id: 2,
    img: "/projectImg/foodblogger.png",
    title: "Food Blogger",
    description:
      "Assalamu Alaikum I am Md. Nijam Hossen, This is my Food Blogger website. This site has been created using react, tailwindcss, next js, Firebase etc.",
    techno: "React js, Tailwind Css, Next js, Firebase",
    live: "https://food-blogger-lejr.vercel.app/",
    repo: "https://github.com/NH-Nijam/Food-Blogger",
  },
  {
    id: 3,
    img: "/projectImg/gymstick.png",
    title: "Gymstick",
    description:
      "Assalamu Alaikum I am Md. Nijam Hossen, This is my Gymstick- Gym Management System | Website | Trainer Panel | Admin Panel (MERN). This site has been created using MERN stack technology.",
    techno: "Next js, Tailwind Css, express js, MongoDB",
    live: "https://nextjs.gymstick.appstick.com.bd/",
    repo: "https://github.com/Appstick-Ltd/gymstick2-frontend-nextjs",
  },
  {
    id: 4,
    img: "/projectImg/lawstick.png",
    title: "Lawstick",
    description:
      "Assalamu Alaikum I am Md. Nijam Hossen, This is my Lawstick - Law Firm Management System | User Panel | Attorney Panel | Admin Panel (MERN). This site has been created using MERN stack technology.",
    techno: "Next js, Tailwind Css, express js, MongoDB",
    live: "https://lawfirm.appstick.com.bd/",
    repo: "https://github.com/Appstick-Ltd/lawstick-nextjs",
  },
  {
    id: 5,
    img: "/projectImg/gostick.png",
    title: "Gostick",
    description:
      "Assalamu Alaikum I am Md. Nijam Hossen, This is my Gostick – A Complete Car Rental Platform | User | Vendor | Admin Panel (MERN). This site has been created using MERN stack technology.",
    techno: "Next js, Tailwind Css, express js, MongoDB",
    live: "https://gostick.appstick.com.bd/",
    repo: "https://github.com/Appstick-Ltd/gostick-backend-nodejs",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-10 md:py-24 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.12),transparent_60%)]">
      <div className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_60%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] z-0 opacity-50 animate-pan-bg" />

      <div className=" mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-[clamp(2rem,5vw,3rem)] font-extrabold mb-6 md:mb-8 text-center bg-[linear-gradient(135deg,#8b5cf6,#6366f1)] bg-clip-text text-transparent animate-hue-cycle">Featured Projects</h2>
          <div className="w-16 md:w-20 h-1 bg-[linear-gradient(135deg,#8b5cf6,#6366f1)] rounded-full -mt-4 md:-mt-6 animate-hue-cycle" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 40 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-full pb-12"
          style={{ perspective: "1000px" }}
        >
          <Swiper
            centeredSlides={true}
            slidesPerView={1.2}
            spaceBetween={15}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="w-full pt-4 pb-12 md:pt-8 md:pb-16"
          >
            {[...ProjectsData, ...ProjectsData].map((project, index) => (
              <SwiperSlide key={`${project.id}-${index}`} className="w-full h-auto flex group/slide transition-opacity duration-300 [&:not(.swiper-slide-active)]:opacity-50">
                <div className="w-full bg-zinc-900/40 border border-white/10 rounded-[16px] md:rounded-[20px] overflow-hidden transition-all duration-400 flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.3)] group-[.swiper-slide-active]/slide:border-blue-500/60 group-[.swiper-slide-active]/slide:shadow-[0_20px_50px_rgba(59,130,246,0.2)] group/card">
                  <div className="relative w-full aspect-video overflow-hidden bg-[#111]">
                    <Image src={project.img} width={1000} height={1000} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-[.swiper-slide-active]/slide:group-hover/card:scale-105" />

                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-[.swiper-slide-active]/slide:group-hover/card:opacity-100">
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 text-[0.8rem] md:text-sm md:px-5 md:py-2.5 bg-[linear-gradient(135deg,#8b5cf6,#6366f1)] text-white rounded-full font-semibold translate-y-5 transition-transform duration-300 group-[.swiper-slide-active]/slide:group-hover/card:translate-y-0">
                        View Project <ExternalLink size={14} className="md:w-4 md:h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="p-4 md:p-6 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                    <p className="text-[0.85rem] md:text-[0.9rem] text-zinc-400 leading-relaxed mb-4 md:mb-5 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-5 md:mb-6">
                      {project.techno.split(', ').map((tech, i) => (
                        <span key={i} className="text-[9px] md:text-[11px] px-2 py-1 md:px-2.5 md:py-1 bg-white/5 text-violet-400 rounded-full border border-white/10">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-white text-[0.8rem] md:text-xs font-medium transition-colors hover:text-violet-500">
                        <Code size={14} className="md:w-4 md:h-4" /> Code
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-white text-[0.8rem] md:text-xs font-medium transition-colors hover:text-violet-500">
                        <ExternalLink size={14} className="md:w-4 md:h-4" /> Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
