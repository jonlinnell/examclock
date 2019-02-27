import styled from 'styled-components';

const DigitalClockFace = styled.ul`
  list-style: none;

  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 200;
  font-size: 10vh;

  color: ${({ theme }) => theme.colours.textPrimary};
  transition: color 1s;

  & :nth-child(2) {
  }
`;

export default DigitalClockFace;
