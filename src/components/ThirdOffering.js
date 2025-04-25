import Image from 'next/image'

export default function ThirdOffering() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image on left - larger size */}
          <div className="md:w-2/5">
            <Image
              src="/f_offering3.svg"
              alt="Website & App Development"
              width={320}
              height={320}
              className="w-full "
            />
          </div>

          {/* Text content on right */}
          <div className="md:w-3/5">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
          
            Creativity,Connectivity & Collaboration 
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
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
    </section>
  )
}