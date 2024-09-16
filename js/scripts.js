function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeButton = document.querySelector('.toggle-theme-btn');
    themeButton.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

function toggleForm() {
    const formContainer = document.querySelector('.reservation-form-container');
    formContainer.style.display = formContainer.style.display === 'flex' ? 'none' : 'flex';
}
