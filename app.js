document.addEventListener('DOMContentLoaded', function () {
const prevBtns = document.querySelectorAll('.btnPre');
const nextBtns = document.querySelectorAll('.btnNext');
const progress = document.getElementById('progress');
const formSteps = document.querySelectorAll('.formStepParant');

let formStepsNum = 0;

nextBtns.forEach(btn =>{
    btn.addEventListener('click',()=>{
        formStepsNum++;
        updateFormSteps();
    })
});

function updateFormSteps(){
    formSteps[formStepsNum].classList.add('active');
    console.log(formStepsNum);
}
})







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