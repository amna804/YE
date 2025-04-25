// pages/journey.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FirstOffering from '@/components/FirstOffering';
import SecondOffering from '@/components/SecondOffering';
import ThirdOffering from '@/components/ThirdOffering';

export default function Journey() {
  return (
    <>
      <Navbar />
      <Hero />
      <FirstOffering/>
      <SecondOffering/>
      <ThirdOffering/>
      <Footer/>
    </>
  );
}
