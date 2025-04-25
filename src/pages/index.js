import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CenteredHeading from '@/components/CenteredHeading'
import FirstOffering from  '@/components/FirstOffering'
import SecondOffering from '@/components/SecondOffering'
import ThirdOffering from '@/components/ThirdOffering'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Youth Empowerment | Portfolio</title>
        <meta name="description" content="Professional portfolio " />
      </Head>

      <Navbar />
      <Hero />
      

      <main className="flex-grow">
        {/* Your page content */}
       
        <section className="py-15">
          <CenteredHeading 
            mainText="Our"
            highlightText="Capabilities"
            subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          />
       </section>

       <FirstOffering/>
       <SecondOffering />
       <ThirdOffering/>

       <Footer/>
      </main>

  
    </div>
  )
}