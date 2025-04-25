// pages/journey.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TributePage from '@/components/Tributepage';
import CenteredHeading from '@/components/CenteredHeading';

export default function Journey() {
  return (
    <>
      <Navbar />
        <section className="py-15">
                <CenteredHeading 
                  mainText="Legacy That "
                  highlightText="Leads"
                  subText="Their footsteps guide our present, their legacy fuels our future"
                />
             </section>
      <TributePage />
      <Footer/>
    </>
  );
}
