/*  eslint-disable prettier/prettier */
import { css } from 'linaria'

export const appearAnimation = css`
  animation-name: appear;
  animation-fill-mode: forwards;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-delay: var(--appear-animation-delay);

  opacity: 0;
  transform: translateX(-1rem);
  @keyframes appear {
    from {
      opacity: 0;
      transform: translateX(-1rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
