// square mixin style constants

export const bricksCommon = () =>
  `
    height: 50px;
    width: 80px;
    background-color: red;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;

    animation-name: translateBricks;
    animation-duration: 4s;
    animation-timing-function: cubic-bezier(0.65, -0.55, 0.25, 1.5);
    animation-iteration-count: infinite;
    will-change: transform;
  `;

export const bricksAnimation = (a,b,c,d) => (
  `
  @keyframes translateBricks {
    0%{
      transform: translateX(${a}px);
    }
        10%{
        transform: translateX(${a}px);
        }
    20% {
      transform: translateX(${b}px);
    }
        40% {
        transform: translateX(${b}px);
        }

    60% {
      transform: translateX(${c}px);
    }
        80% {
        transform: translateX(${c}px);
        }
    
    90% {
      transform: translateX(${d}px);
    }
        100% {
      transform: translateX(${d}px);
    }
  }
  `);
