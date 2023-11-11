//using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    const button = question.querySelector('.question-btn');
    button.addEventListener('click', event => {
        questions.forEach(q => {
            if (q !== question) {
                q.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});


// traversing the dom

// const questionButtons = document.querySelectorAll('.question-btn');
// questionButtons.forEach(plusIcon => {
//     plusIcon.addEventListener('click', (event) => {
//         const question = event.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });
