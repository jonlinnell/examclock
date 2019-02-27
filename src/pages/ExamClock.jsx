import React from 'react';

import AnalogueClock from '../components/AnalogueClock';
import DigitalClock from '../components/DigitalClock';

import ExpandingSection from '../components/ExpandingSection';

const Home = () => (
  <ExpandingSection>
    <AnalogueClock />
    <DigitalClock />
  </ExpandingSection>
);

export default Home;
