import React from 'react';
// import { AnimatedProgressProvider } from 'components/AnimatedProgressProvider';
import ChangingProgressProvider from 'components/ChangingProgressProvider';

const ProgressBar = () => {

<Example label="Daily score">
<ChangingProgressProvider values={[0, 100]}>
  {percentage => (
    <CircularProgressbar
    value={percentage}
    text={`${percentage} P`}
    strokeWidth={5}
    styles={buildStyles({
      textSize: "30px",
      textColor: "green",
      pathColor: "orange",
      trailColor: "transparent"
    })}
    />
  )}
</ChangingProgressProvider>
</Example>
}

export default ProgressBar;

// <Example label="Daily score">
// <ChangingProgressProvider values={[0, 100]}>
//   {percentage => (
//     <CircularProgressbar
//     value={percentage}
//     text={`${percentage} P`}
//     strokeWidth={5}
//     styles={buildStyles({
//       textSize: "30px",
//       textColor: "green",
//       pathColor: "orange",
//       trailColor: "transparent"
//     })}
//     />
//   )}
// </ChangingProgressProvider>
// </Example>

// <Example label="Daily score with image">
// <CircularProgressbarWithChildren value={66}>
//   {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
//   <img
//     style={{ width: 70, marginTop: -4 }}
//     src="https://lh3.googleusercontent.com/U4ss0tLqB8G_bGeYhbAOewyGW25VrveeWXKsdHPzTGa_QD6rTlZcBHjQ1jH01MyvKsKn_c2YluGgLZaCsUgMWD1NaI8Zv1TV9U2mMHPvghWNljflFNu3xTqZ-4R0tawUvCpBGKTZ2A=w2400"
//     alt="planet"
//   />
//   <div style={{ fontSize: 20, marginTop: -30 }}>
//   {percentage}<strong> </strong>P
//   </div>
// </CircularProgressbarWithChildren>
// </Example>

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