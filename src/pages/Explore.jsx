import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExploreSite from '@/components/ExploreSite';
import WhyEmmmarSection from '@/components/WhyEmmmarSection'
import FleetAndValues from '@/components/FleetAndValues'

export default function Explore() {
  return (
    <div className="bg-paper text-ink antialiased">
      <Header />
      <ExploreSite />
      <WhyEmmmarSection />
      < FleetAndValues />
      <Footer />
    </div>
  );
}
