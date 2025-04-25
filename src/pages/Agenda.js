// pages/journey.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CenteredHeading from '@/components/CenteredHeading';
import AgendaPaage from '@/components/Agendapaage';

export default function Journey() {
  return (
    <>
      <Navbar />
        <section className="py-15">
                <CenteredHeading 
                  mainText="Pathways to "
                  highlightText="Success "
                  subText="Find Out What YE Community Has to Offer Every Learner"
                />
             </section>
      <AgendaPaage/>
      <Footer/>
    </>
  );
}
