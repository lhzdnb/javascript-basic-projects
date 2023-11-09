const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});