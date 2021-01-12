import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import { FourthSection} from './FourthSection';
import {FivthSection} from './FivthSection';
import {SixthSection} from './SixthSection';
import SeventhSection from './SeventhSection';
import EightSection from './EightSection';
import {VideoSection} from './VideoSection';
import { Footer } from './Footer';
import FormSection from './FormSection';

const App = () =>{
  return (
    <>
      <div id="page-container">
          <div id="main-content">
              <FirstSection />
              <SecondSection />
              <ThirdSection /> 
              <FourthSection />
              <FivthSection />
              <SixthSection />
              <SeventhSection />
              <EightSection />
              <VideoSection />

              <FormSection />
              <Footer />
              
          </div>
      </div>
    
    </>

  )
}
export default App;
