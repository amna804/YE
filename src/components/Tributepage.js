// app/tribute/page.tsx or pages/tribute.js
import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const services = [
  {
    title: 'Khalil Ahmad – YE Community Lead',
    description: 'Khalil Ahmad serves as the dedicated lead of the YE Community, bringing expertise in web and game development, UI/UX design, and data management. Known for his strategic mindset and creative approach, he plays a key role in managing operations, enhancing digital platforms, and fostering an engaging environment for community growth. His leadership reflects a commitment to empowering youth and driving impactful, tech-driven initiatives within the YE network.',
    img: '/p1.png',
    linkedin: 'https://www.linkedin.com/in/khalil-ahmad-411270260/',
    facebook: 'https://facebook.com/username1',
    instagram: 'https://instagram.com/username1',
    google: 'mailto:user1@gmail.com',
  },
  {
    title: 'Maria Sultan',
    description: 'Founder of Youth Empowerment. Led with vision, empowered students in tech, and built a legacy of growth and inclusion.From launching hands-on coding bootcamps to mentoring AI-based projects, Maria contributions laid the foundation of our inclusive and growth-driven culture. Even after stepping away, her values and vision continue to guide us. She may have moved on, but her legacy lives on—in every empowered student, every learning session, and every step we take forward.',
    img: '/p1.png',
    linkedin: 'https://www.linkedin.com/in/maria-sultan-bb9032298/',
    facebook: 'https://facebook.com/username2',
    instagram: 'https://instagram.com/username2',
    google: 'mailto:user2@gmail.com',
  },
  {
    title: 'Illustration',
    description: 'Porttitor aliquam habitasse vulputate adipiscing duis interdum molestie tellus.',
    img: '/p1.png',
    linkedin: 'https://linkedin.com/in/username2',
    facebook: 'https://facebook.com/username2',
    instagram: 'https://instagram.com/username2',
    google: 'mailto:user2@gmail.com',
  },
  {
    title: 'Amna Bibi - Technical Team Lead',
    description: 'Amna Bibi is the Web Developer Team Lead at Youth Empowerment and the creative force behind our official community website and portfolio. With a strong command of front-end and back-end technologies, she has not only built the digital face of YE but also leads and mentors the entire web development team. Her leadership ensures quality, collaboration, and innovation across all our web-based initiatives. Through her dedication, technical skill, and vision, Amna continues to play a key role in shaping the online identity and growth of the community',
    img: '/p1.png',
    linkedin: 'https://www.linkedin.com/in/amna3451-bibi/',
    facebook: 'https://facebook.com/username2',
    instagram: 'https://instagram.com/username2',
    google: 'mailto:user2@gmail.com',
  },

  {
    title: 'Illustration',
    description: 'Porttitor aliquam habitasse vulputate adipiscing duis interdum molestie tellus.',
    img: '/p1.png',
    linkedin: 'https://linkedin.com/in/username2',
    facebook: 'https://facebook.com/username2',
    instagram: 'https://instagram.com/username2',
    google: 'mailto:user2@gmail.com',
  },
  {
    title: 'Illustration',
    description: 'Porttitor aliquam habitasse vulputate adipiscing duis interdum molestie tellus.',
    img: '/p1.png',
    linkedin: 'https://linkedin.com/in/username2',
    facebook: 'https://facebook.com/username2',
    instagram: 'https://instagram.com/username2',
    google: 'mailto:user2@gmail.com',
  },

];

const TributePage = () => {
  return (
    <section className="min-h-screen bg-background text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-transparent border-2 border-white p-6 rounded-lg shadow-2xl hover:shadow-xl transition flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center gap-6">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="mt-4 text-sm font-medium text-white">{service.description}</p>
            </div>

            {/* Bottom Row: Learn more + Social Icons */}
            <div className="mt-6 flex justify-between items-center">
              <a
                href={service.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Learn more →
              </a>
              <div className="flex gap-4 text-blue-600 text-[20px]">
                <a href={service.instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={service.facebook} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href={service.google} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TributePage;
