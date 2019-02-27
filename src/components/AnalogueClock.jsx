// @TODO write this
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';

import TimeContext from '../context/TimeContext';

import clockface from '../static/images/clockface.svg';

const commonHandPositioning = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: bottom center;
`;

const AnalogueClockFace = styled.div`
  transform: scale(0.8);
  width: 60vh;
  height: 60vh;
  border-radius: 50%;

  background: url(${clockface}) center center no-repeat;

  &:after {
    content: '';
    display: block;
    width: 1.8vh;
    height: 1.8vh;
    background: ${({ theme }) => theme.analogueClock.colours.pivot};
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
`;

const HourHand = styled.div`
  ${commonHandPositioning}

  width: 1vh;
  height: 30%;
  background: ${({ theme }) => theme.analogueClock.colours.hours};
  z-index: 2;
  border-radius: ${({
    theme: {
      analogueClock: { handRadius },
    },
  }) => `${handRadius} ${handRadius} 0 0`};

  transform: translate(-50%, -100%) rotate(${({ hours }) => (hours / 12) * 360}deg);
`;

const MinuteHand = styled.div`
  ${commonHandPositioning}

  width: 0.7vh;
  height: 40%;
  background: ${({ theme }) => theme.analogueClock.colours.minutes};
  z-index: 2;
  border-radius: ${({
    theme: {
      analogueClock: { handRadius },
    },
  }) => `${handRadius} ${handRadius} 0 0`};
  overflow: hidden;

  transform: translate(-50%, -100%) rotate(${({ minutes }) => minutes * 6}deg);
`;

const SecondHand = styled.div`
  ${commonHandPositioning}

  width: 0.3vh;
  height: 50%;
  background: ${({ theme }) => theme.analogueClock.colours.seconds};
  z-index: 3;
  border-radius: ${({
    theme: {
      analogueClock: { handRadius },
    },
  }) => `${handRadius} ${handRadius} 0 0`};

  transform: translate(-50%, -100%) rotate(${({ seconds }) => (seconds * 60) / 10}deg);
`;

const AnalogueClock = () => {
  const { time } = useContext(TimeContext);

  return (
    <AnalogueClockFace>
      <HourHand hours={moment(time).hours()} />
      <MinuteHand minutes={moment(time).minutes()} />
      <SecondHand seconds={moment(time).seconds()} />
    </AnalogueClockFace>
  );
};

export default AnalogueClock;
