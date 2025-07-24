import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGoogle,
  faFacebook,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-30">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Name - larger text with more spacing */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Young Ones Uniting To <span className="text-blue-400"> Harness-change</span>
        </h1>

        {/* Titles - stacked with proper line breaks */}
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          Providing Opprtunities | Exposure | Future Development
        </h2>

        {/* Description paragraph with larger text */}
        <div className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>We build exceptional digital experiences with modern web technologies.</p>
          <p className="text-white">Empowering youth through collaboration and innovation.</p>
        </div>

        {/* Buttons - larger with more spacing */}
        <div className="flex justify-center gap-6 mb-16">
          <Link
            href="https://chat.whatsapp.com/LvMewaAIm3k0JNYKcNUqmV"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
          >
            Join Our Wattsapp
          </Link>
          <Link
            href="/Journey"
            className="border border-gray-600 hover:bg-gray-800 text-gray-200 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
          >
            View Our Journey
          </Link>
        </div>

        {/* Social links section */}
        <div>
          <p className="text-gray-400 mb-6 text-lg">Follow us here</p>
          <div className="flex justify-center gap-8">
            {[
              {
                name: 'Gmail',
                url: ' ',
                icon: faGoogle,
                color: 'text-gray-300 hover:text-white'
              },
              {
                name: 'Facebook',
                url: 'https://web.facebook.com/mlsayouthempowerment?mibextid=ZbWKwL&_rdc=1&_rdr#',
                icon: faFacebook,
                color: 'text-blue-400 hover:text-blue-300'
              },
              {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/company/youth-empowerment-community/posts/?feedView=all',
                icon: faLinkedin,
                color: 'text-blue-500 hover:text-blue-400'
              },
              {
                name: 'Instagram',
                url: 'https://www.instagram.com/_youthempowerment_/',
                icon: faInstagram,
                color: 'text-gray-400 hover:text-gray-300'
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl transition-colors ${social.color}`}
                aria-label={social.name}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}