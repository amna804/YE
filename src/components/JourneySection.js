'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    period: 'Mar 2023 – Present',
    role: 'Founder & Core Team Formation',
    company: 'Youth Empowerment (YE)',
    points: [
      'Founded by Maria Sultan andcurently in lead of Khalil Ahmed with a vision to empower students through technology and leadership.',
      'Established core departments: Tech, Design, Community, and Content.',
      'Improved website loading time by 80% through image optimization, minimizing main-thread work, and implementing SEO strategies.Built an inclusive platform to support aspiring developers, designers, and tech leaders.',
      
    ]
  },
  {
    period: 'Jun 2023 – Sep 2023',
    role: 'Women Tech Hub Launch + Mentorship Program',
    company: 'Youth Empowerment',
    points: [
      'Launched Women Tech Hub to promote women in STEM.',
      'Conducted weekly mentorship sessions on AI, DSA, OOP, and web technologies.',
      'Reached 100+ students across Pakistan in the first mentorship wave.',
      
    ]
  },
  {
    period: 'Oct 2023 – Dec 2023',
    role: 'Hackathon Series & Speaker Sessions',
    company: 'Youth Empowerment',
    points: [
      'Organized virtual hackathon with 200+ participants from 10+ universities.',
      'Hosted speaker sessions on AI, cybersecurity, and freelancing featuring industry experts.',
      'Introduced beginner-to-pro bootcamps on HTML, CSS, and React.',
      
    ],
  },
  {
    period: 'Jan 2024 – Feb 2024',
    role: 'Official Website & Portfolio Launch',
    company: 'Youth Empowerment',
    points: [
      'Website designed and developed by Amna Bibi (Web Dev Lead) and her team.',
      'Created team portfolios, member sections, and live event integrations.',
      'Improved community branding and online accessibility.',
      
    ],
  },
  {
    period: 'Mar 2024 – Jul 2024',
    role: 'Tech Team Expansion & New Initiatives',
    company: 'Youth Empowerment',
    points: [
      'Expanded Web Development, Content, and teams.',
      'Introduced student-led projects including a Community team members and leads.',
      'Collaborated with external communities to promote cross-learning.',
      
    ],
  },
];

export default function JourneySection() {
  const containerRef = useRef(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalHeight = container.scrollHeight;
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, window.innerHeight);
      const visibleHeight = visibleBottom - visibleTop;

      const scrollTop = window.scrollY + visibleTop - container.offsetTop;
      const maxVisible = totalHeight - window.innerHeight;
      const percent = Math.min(1, scrollTop / maxVisible);

      setFillHeight(percent * totalHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-16" ref={containerRef}>
      {/* Vertical line container */}
      <div className="absolute left-20 top-0 w-[2px] h-full bg-gray-700 z-0" />
      {/* Colored animated scroll-fill line */}
      <motion.div
        className="absolute left-20 top-0 w-[2px] bg-blue-600 z-10"
        style={{ height: fillHeight }}
      />

      <div className="flex flex-col space-y-20 relative">
        {timeline.map((item, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-6 items-start relative">
            {/* Dot and Date */}
            <div className="col-span-12 md:col-span-4 relative flex items-start justify-start">
              <div className="absolute left-[0.15rem] top-1 w-8 h-8 bg-zinc-900 border-[4px] border-blue-600 rounded-full shadow-md z-20" />
              <div className="pl-20">
                <p className="text-white font-bold text-2xl">{item.period}</p>
              </div>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.25 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-8 space-y-2"
            >
              <h3 className="text-white font-bold text-base">{item.role}</h3>
              <p className="text-gray-400 font-medium">@{item.company}</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-300">
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
