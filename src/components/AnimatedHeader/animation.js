// export const menuSlide = {
//     initial: {
//       x: "calc(100% + 100px)",
     
//     },
//     enter: {
//       x: "0%",
//       transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]}
//     },
//     exit: {
//       x: "calc(100% + 100px)",
//       transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]}
//     },
//   };
  
  
//   export const slide = {
//       initial: {
//         x: "80px",
//       },
//       enter:(i) =>( {
//         x: "0px",
//         transition:{duration:0.8, ease:[0.76, 0, 0.24, 1], delay:0.05 * i}
//       }),
//       exit:(i) =>( {
//         x: "80px",
//         transition:{duration:0.8, ease:[0.76, 0, 0.24, 1], delay:0.05 * i}
//       }),
//     };



//     export const hairSlide = {
//       initial: {
//         x: "10%",
//       },
//       enter: {
//         x: "0%",
//         transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]}
//       },
//       exit: {
//         x: "calc(100% + 100px)",
//         transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]}
//       },
//     };


export const menuSlide = {
  initial: {
    x: "100%", // Cambiado de "calc(100% + 100px)" a "100%"
  },
  enter: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    x: "100%", // Cambiado de "calc(100% + 100px)" a "100%"
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  },
};

export const slide = {
  initial: {
    x: "80px",
  },
  enter: (i) => ({
    x: "0px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i }
  }),
  exit: (i) => ({
    x: "80px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i }
  }),
};

export const hairSlide = {
  initial: {
    x: "10%",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    x: "100%", // Cambiado de "calc(100% + 100px)" a "100%"
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  },
};