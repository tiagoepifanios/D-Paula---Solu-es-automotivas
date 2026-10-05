import { About } from './components/About';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Location } from './components/Location';
import { Reviews } from './components/Reviews';
import { Services } from './components/Services';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
