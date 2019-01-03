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

    will-change: transform;
  `;

// export const bricksAnimation = (a,b,c,d) => (
//   `
//   @keyframes translateBricks {
//     0%{
//       transform: translateX(${props=> props.a}px);
//     }
//         10%{
//         transform: translateX(${props=> props.a}px);
//         }
//     20% {
//       transform: translateX(${props=> props.b}px);
//     }
//         40% {
//         transform: translateX(${props=> props.b}px);
//         }

//     60% {
//       transform: translateX(${props=> props.c}px);
//     }
//         80% {
//         transform: translateX(${props=> props.c}px);
//         }
    
//     90% {
//       transform: translateX(${props=> props.d}px);
//     }
//         100% {
//       transform: translateX(${props=> props.d}px);
//     }
//   }
//   `);
