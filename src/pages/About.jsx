import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSite from '@/components/AboutSite';

export default function About() {
  return (
    <div className="bg-paper text-ink antialiased">
      <Header />
      <AboutSite />
      <Footer />
    </div>
  );
}
