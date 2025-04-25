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
    title: 'UI/UX Design',
    description: 'Porttitor aliquam habitasse vulputate adipiscing duis interdum molestie tellus.',
    img: '/p1.png',
    linkedin: 'https://linkedin.com/in/username1',
    facebook: 'https://facebook.com/username1',
    instagram: 'https://instagram.com/username1',
    google: 'mailto:user1@gmail.com',
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
    <section className="min-h-screen bg-background text-blue-600 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between h-full"
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
              <p className="mt-4 text-sm font-medium text-gray-600">{service.description}</p>
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
