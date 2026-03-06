import React, { useState } from 'react';
import OpeningModal from './components/OpeningModal';
import Hero, { heroImage } from './components/Hero';
import Verse from './components/Verse';
import CoupleInfo from './components/CoupleInfo';
import EventDetails from './components/EventDetails';
import History from './components/History';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
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
    <div className="relative min-h-screen bg-black overflow-hidden">
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
        
        {/* Connected Background for Hero and Verse */}
        <div 
          className="relative bg-cover bg-[center_30%]"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Overlay to ensure readability and smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 via-[70%] to-black"></div>
          
          <Hero data={weddingData} />
          <Verse />
        </div>

        <CoupleInfo groom={weddingData.groom} bride={weddingData.bride} />
        <EventDetails events={weddingData.events} />
        <History history={weddingData.history} />
        <Gallery images={weddingData.gallery} />
        <RSVP whatsappNumber={weddingData.whatsappNumber} />

        {/* Footer */}
        <footer className="relative py-16 text-center bg-yellow-600/70 text-white font-serif">

          {/* Divider */}
          <div className="w-24 h-[1px] bg-white/30 mx-auto mb-10"></div>

          {/* Ucapan */}
          <p className="text-sm text-white/80">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami
          </p>
          <p className="text-sm text-white/80 mb-6">
            apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>

          <h2 className="text-4xl space-x10 font-script mb-6">
            {weddingData.bride.name} & {weddingData.groom.name}
          </h2>

          <p className="text-sm text-white/60 mb-10">Terima Kasih</p>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-white/20 mx-auto mb-6"></div>

          {/* Creator */}
          <p className="text-xs text-white/50 mb-2">
            Digital Invitation by
          </p>

          <h3 className="text-lg tracking-wide mb-4">
            Tino Perdiyansya
          </h3>

          {/* Social */}
          <div className="flex justify-center gap-6 text-sm">

            <a
              href="https://instagram.com/tinoperdiyansya"
              target="_blank"
              className="px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/6281245793800"
              target="_blank"
              className="px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition"
            >
              WhatsApp
            </a>

          </div>

          <p className="text-xs text-white/30 mt-8">
            © {new Date().getFullYear()} Wedding Invitation
          </p>

        </footer>
      </div>
    </div>
  );
}

export default App;
