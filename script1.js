document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    
    if (username && password) {
        // Сохраняем данные пользователя
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        // Перенаправление на основную страницу
        window.location.href = 'index.html';
    } else {
        alert('Пожалуйста, заполните все поля');
    }
});
