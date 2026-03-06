import React, { useState } from 'react';
import OpeningModal from './components/OpeningModal';
import Hero from './components/Hero';
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
    <div className="relative min-h-screen bg-Background overflow-hidden">
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
        <Hero data={weddingData} />
        <CoupleInfo groom={weddingData.groom} bride={weddingData.bride} />
        <EventDetails events={weddingData.events} />
        <History history={weddingData.history} />
        <Gallery images={weddingData.gallery} />
        <RSVP whatsappNumber={weddingData.whatsappNumber} />

        {/* Footer */}
        <footer className="py-10 text-center bg-Primary text-white font-serif">
          <p className="text-sm">Merupakan suatu kehormatan dan kebahagiaan bagi kami</p>
          <p className="text-sm mb-4">apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.</p>
          <h2 className="text-3xl font-script mt-6">{weddingData.groom.name} & {weddingData.bride.name}</h2>
          <p className="text-xs mt-8 opacity-70">Terima Kasih</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
