import { css } from 'styled-components';

const commonTransitions = css`
  transition: ${({ theme: { transitionDuration } }) => `color ${transitionDuration}, background-color ${transitionDuration}, border ${transitionDuration}`};
`;

export { commonTransitions };

export default null;
