import React from 'react';

import AnalogueClock from '../components/AnalogueClock';
import DigitalClock from '../components/DigitalClock';

import FullPageSection from '../components/FullPageSection';

const Home = () => (
  <FullPageSection>
    <AnalogueClock />
    <DigitalClock />
  </FullPageSection>
);

export default Home;
