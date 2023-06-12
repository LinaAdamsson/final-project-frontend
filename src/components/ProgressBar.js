// import React from 'react';
// import styled from 'styled-components';
// import { useSelector } from 'react-redux';

// export const ProgressBar = () => {
//   const currentQuestion = useSelector(
//     (state) => state.quiz.currentQuestionIndex
//   );
//   const correctPercent = (currentQuestion * 100) / 5;
//   const percent = Number(correctPercent).toFixed();

// document.getElementsByClassName("progress-bar")[0].setAttribute("style", "width:50%");
// document.getElementsByClassName("progress-bar").style.width = "50%";

// const percent = 10;
// document.querySelector(".progress-bar").style.width = percent + "%";
// function increase(){
//   percent = percent > 90 ? 10 : percent + 10;
//   document.querySelector(".progress-bar").style.width = percent + "%";
// }

// <div class="progress">
//     <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
//     </div>
// </div>
// <hr />
// <button onclick="increase()">increase</button>