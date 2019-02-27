import React, { useContext } from 'react';

import AppSettingsContext from '../context/AppSettingsContext';

import AnalogueClock from '../components/AnalogueClock';
import DigitalClock from '../components/DigitalClock';

import ExpandingSection from '../components/ExpandingSection';

const Home = () => {
  const { analogueClockVisibility, digitalClockVisibility } = useContext(AppSettingsContext);
  return (
    <ExpandingSection>
      {analogueClockVisibility ? <AnalogueClock /> : null}
      {digitalClockVisibility ? <DigitalClock /> : null}
    </ExpandingSection>
  );
};

export default Home;
