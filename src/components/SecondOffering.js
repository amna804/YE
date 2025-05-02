import Image from 'next/image'

export default function SecondOffering() {
  return (
    <section className="py-18">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto"> {/* Added max-width container */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            {/* Image on right - adjusted width */}
            <div className="md:w-5/12 lg:w-4/12 px-4 md:px-0"> {/* Added px-4 for mobile padding */}
              <Image
                src="/f_offering1.svg"
                alt="Website & App Development"
                width={280}
                height={280}
                className="w-full max-w-xs mx-auto" // Centered with max-width
              />
            </div>

            {/* Text content on left - takes more space */}
            <div className="md:w-7/12 lg:w-8/12 px-4 md:px-8"> {/* Added horizontal padding */}
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 text-center md:text-left">
                Building with the Web
              </h2>
              
              <p className="text-xl text-gray-400 mb-8 leading-relaxed text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                
                <p>
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}