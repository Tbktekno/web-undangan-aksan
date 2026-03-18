import React, { useState } from 'react';
import OpeningModal from './components/OpeningModal';
import Hero, { heroImage } from './components/Hero';
import Verse from './components/Verse';
import CoupleInfo from './components/CoupleInfo';
import EventDetails from './components/EventDetails';
import History from './components/History';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Gifts from './components/Gifts';
import AudioController from './components/AudioController';
import { weddingData } from './config/data';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setPlayAudio(true);
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Audio Controller hidden but functional, or visible for pause/play */}
      {playAudio && <AudioController musicUrl={weddingData.musicUrl} isOpened={isOpened} />}

      <OpeningModal
        isOpened={isOpened}
        onOpen={handleOpenInvitation}
        groomName={weddingData.groom.name}
        brideName={weddingData.bride.name}
      />

      {/* Main Content (Visible only when opened) */}
      <div className={`transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>

        {/* Hero Section with its own background */}
        <div
          className="relative bg-cover bg-center min-h-screen"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>

          <div className="relative z-10 w-full h-full">
            <Hero data={weddingData} />
          </div>
        </div>

        <Verse />
        <CoupleInfo groom={weddingData.groom} bride={weddingData.bride} />
        <EventDetails events={weddingData.events} gallery={weddingData.gallery} />
        <History history={weddingData.history} />
        <Gallery images={weddingData.gallery} />
        {/* <Gifts /> */}
        <RSVP whatsappNumber={weddingData.whatsappNumber} />

        {/* Footer */}
        <footer className="relative py-32 text-center bg-background px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <p className="text-secondary/60 font-sans uppercase tracking-[0.3em] text-[10px]">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami
              </p>
              <p className="text-secondary/60 font-sans uppercase tracking-[0.3em] text-[10px]">
                apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-display text-primary uppercase tracking-widest py-8 border-y border-white/5 inline-block px-12">
              {weddingData.bride.name} <span className="text-xl lowercase font-script mx-2">&</span> {weddingData.groom.name}
            </h2>

            <p className="text-secondary/40 font-display uppercase tracking-widest text-xs">Terima Kasih</p>

            <div className="pt-12 space-y-4 opacity-40">
              <p className="text-[10px] text-secondary uppercase tracking-[0.4em]">
                Digital Invitation by
              </p>
              <h3 className="text-lg text-primary font-display uppercase tracking-[0.2em]">
                Tino Perdiyansya
              </h3>

              <div className="flex justify-center gap-6 text-[10px] uppercase font-sans tracking-widest">
                <a
                  href="https://instagram.com/tinoperdiyansya"
                  target="_blank"
                  className="hover:text-primary transition-colors border-r border-white/10 pr-6 last:border-0"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/6281245793800"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <p className="text-[8px] text-secondary/20 uppercase tracking-[0.5em] pt-12">
              © {new Date().getFullYear()} Wedding Invitation
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
