document.addEventListener('DOMContentLoaded', function () {
    const prevBtns = document.querySelectorAll('.btnPre');
    const nextBtns = document.querySelectorAll('.btnNext');
    const progress = document.getElementById('progress');
    const formSteps = document.querySelectorAll('.formStepParent');
    const progressSteps = document.querySelectorAll('.progressbarStep');
  
    let formStepsNum = 0;
  
    nextBtns.forEach(btn => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        formStepsNum = Math.min(formStepsNum + 1, formSteps.length - 1);
        updateFormSteps();
      });
    });
  
    prevBtns.forEach(btn => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        formStepsNum = Math.max(formStepsNum - 1, 0);
        updateFormSteps();
      });
    });
  
    function updateFormSteps() {
      formSteps.forEach((formStep, index) => {
        formStep.classList.toggle('active', index === formStepsNum);
      });
  
      // Update progress bar
      const progressValue = (formStepsNum / (formSteps.length - 1)) * 100;
      progress.style.width = `${progressValue}%`;
    }
  });
  






// nextBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         formStepsNum++;
//         if (formStepsNum < formSteps.length) {
//             updateFormSteps();
//         } else {
//             // Handle reaching the end of the form
//             console.log('Reached the end of the form');
//         }
//     });
// });

// function updateFormSteps() {
//     // Remove 'active' class from all form steps
//     formSteps.forEach(step => step.classList.remove('active'));

//     // Add 'active' class to the current form step
//     formSteps[formStepsNum].classList.add('active');

//     console.log(formStepsNum);
// }