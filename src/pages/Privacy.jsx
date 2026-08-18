import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export default function About() {
  return (
    <div className="bg-paper text-ink antialiased">
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
