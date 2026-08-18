import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TermsAndConditions from '@/components/TermsC';

export default function Terms() {
  return (
    <div className="bg-paper text-ink antialiased">
      <Header />
      <TermsAndConditions />
      <Footer />
    </div>
  );
}
