// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
toggleBtn = document.querySelector('.nav-toggle');
links = document.querySelector('.links');
toggleBtn.addEventListener('click', () => {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // }
    // else {
    //     links.classList.add('show-links');
    // }
    links.classList.toggle('show-links');
});
