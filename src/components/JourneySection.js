'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    period: 'Feb 2023 - Jul 2024',
    role: 'Full Stack Developer',
    company: 'Merito',
    points: [
      'Developed over 5 web applications with seamless backend API integration.',
      'Streamlined workflows by eliminating redundant data, boosting efficiency.',
      'Improved website loading time by 80% through image optimization, minimizing main-thread work, and implementing SEO strategies.',
      'Resolved 100+ bugs and conducted thorough code reviews.',
      'Demonstrated expertise in both backend and frontend development.'
    ]
  },
  {
    period: 'May 2021 - Jul 2022',
    role: 'Full Stack Development Intern',
    company: 'TECHOX LLP',
    points: [
      'Revamped and enhanced 3+ mobile apps using Flutter.',
      'Deployed RESTful APIs for seamless app-server integration.',
      'Integrated Google AdMob to effectively monetize applications.',
      'Contributed to boosting app functionality and revenue generation.',
    ]
  },
  {
    period: 'Jul 2021 - Nov 2021',
    role: 'Web Development Intern',
    company: 'Career Corner Education Pvt Ltd',
    points: [
      'Spearheaded website development and enhancements for company portals.',
      'Prioritized clean, reusable code with modern tech stacks.',
      'Efficiently managed multiple tasks with minimal supervision.',
      'Collaborated with senior team members to meet and exceed project goals.',
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
