import React from 'react';
// import { render } from "react-dom";
// Import react-circular-progressbar module and styles
import {
  // CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
// Animation
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from './AnimatedProgressProvider';
// import ChangingProgressProvider from './ChangingProgressProvider';

export const ProgressBar = () => {
  const dailyScore = useSelector((store) => store.user.dailyScore)

  return (
    <CircularProgressbarWithChildren
      value={dailyScore}
      // text={`${dailyScore} P`}
      strokeWidth={2}
      styles={buildStyles({
      // This is in units relative to the 100x100px
      // SVG viewbox.
        // textSize: '30px',
        // textColor: 'green',
        pathColor: '#FFB200',
        trailColor: 'transparent'
      })}>
      <img
        style={{
          // width: '70vh',
          // marginTop: 50
          width: '500px',
          height: '500px',
          position: 'absolute'
          // marginLeft: '-40px',
        }}
        src="/Images/globe.png"
        alt="planet" />
      <div style={{
        fontSize: 40,
        letterSpacing: '2px',
        color: 'white',
        fontFamily: 'Bagel Fat One',
        position: 'absolute'
      }}>
        {dailyScore} P
      </div>
    </CircularProgressbarWithChildren>
  )
}
//   return (
//     <ChangingProgressProvider values={[0, 100]}>
//       {percentage => (
//         <CircularProgressbar
//           value={percentage}
//           text={`${percentage} P`}
//           strokeWidth={5}
//           styles={buildStyles({
//             textSize: '30px',
//             textColor: 'green',
//             pathColor: 'orange',
//             trailColor: 'transparent'
//           })
//         }/>
//       )}
//     </ChangingProgressProvider>
//   )
// }

export default ProgressBar;

// <Example label="Multiple concentric paths">
// <CircularProgressbarWithChildren
//   value={100}
//   strokeWidth={3}
//   styles={buildStyles({
//     pathColor: "orange",
//     trailColor: "transparent"
//   })}
// >
//   {/*
//     Width here needs to be (100 - 2 * strokeWidth)%
//     in order to fit exactly inside the outer progressbar.
//   */}
//   <div style={{ width: "84%" }}>
//     <CircularProgressbar
//       value={100}
//       strokeWidth={3}
//       styles={buildStyles({
//         pathColor: "orange",
//         trailColor: "transparent"
//       })}
//     />
//   </div>
// </CircularProgressbarWithChildren>
// </Example>
// </div>
// );