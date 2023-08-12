import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from "./components/navbar";
import { HeroSection1 } from "./components/heroSection1"
import { VisionSpeakerSection2 } from "./components/visionSpeakerSection2"
import { AboutEventSection3 } from './components/aboutEventSection3';
import { SponsorsAndCollegeListed } from './components/sponsorsAndCollegeListed4';
import { StatsSection4 } from './components/statsSection5';
import { WhySponsorSection } from './components/whySponsorUsSection6';
import { GlimpseOfPastEvents } from './components/glimpseOfPastEventsSection7';
import { ContactUs } from './components/contactUsSection8';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <HeroSection1 />
    <VisionSpeakerSection2 />
    <AboutEventSection3 />
    <SponsorsAndCollegeListed />
    <StatsSection4/>
    <WhySponsorSection/>
    <GlimpseOfPastEvents/>
    <ContactUs/>
  </React.StrictMode>,
)



