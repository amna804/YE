import Image from 'next/image'

export default function FirstOffering() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto"> {/* Added max-width container */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image on left - larger size */}
            <div className="md:w-2/5 px-4 md:px-0"> {/* Added px-4 for mobile padding */}
              <Image
                src="/f_offering2.svg"
                alt="Website & App Development"
                width={320}
                height={320}
                className="w-full max-w-md mx-auto" // Centered with max-width
              />
            </div>

            {/* Text content on right */}
            <div className="md:w-3/5 px-4 md:px-8"> {/* Added horizontal padding */}
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 text-center md:text-left">
                Handling Operations
              </h2>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed text-center md:text-left">

                Coordinating tasks, workflows management, and resource optimization 

              </p>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
               <p>
                  Good operating strategies enable teams to respond promptly to challenges, adapt to change,
                  and uphold top standards. Manual or automated, effective operations handling is important
                  for growth and long-term success.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}