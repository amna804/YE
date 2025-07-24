// pages/journey.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FirstOffering from '@/components/FirstOffering';
import SecondOffering from '@/components/SecondOffering';
import ThirdOffering from '@/components/ThirdOffering';
import CenteredHeading from '@/components/CenteredHeading';

export default function Journey() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="flex-grow">
        {/* Your page content */}
        <section className="py-15">
          <CenteredHeading
            mainText="Our"
            highlightText="Capabilities"
            subText="Conception | Collection | Coalition"
          />
          <p className=" text-gray-300 text-center">
            Turning ideas into strategies,
            Gathering insights for impact,
            Collaborating for unified success.
          </p>
        </section>
      </main>

      <FirstOffering />
      <SecondOffering />
      <ThirdOffering />
      <Footer />
    </>
  );
}
