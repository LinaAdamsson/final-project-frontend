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
      text={`${dailyScore} P`}
      strokeWidth={5}
      styles={buildStyles({
      // This is in units relative to the 100x100px
      // SVG viewbox.
        textSize: '30px',
        textColor: 'green',
        pathColor: 'orange',
        trailColor: 'transparent'
      })}>
      <img
        style={{ width: 40, marginTop: -5 }}
        src="https://lh3.googleusercontent.com/U4ss0tLqB8G_bGeYhbAOewyGW25VrveeWXKsdHPzTGa_QD6rTlZcBHjQ1jH01MyvKsKn_c2YluGgLZaCsUgMWD1NaI8Zv1TV9U2mMHPvghWNljflFNu3xTqZ-4R0tawUvCpBGKTZ2A=w2400"
        alt="planet" />
      <div style={{ fontSize: 12, marginTop: -20 }}>
        {dailyScore}<strong> </strong>P
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