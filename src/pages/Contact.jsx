import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSite from '@/components/ContactSite';

export default function Contact() {
  return (
    <div className="bg-paper text-ink antialiased">
      <Header />
      <ContactSite />
      <Footer />
    </div>
  );
}
