// 4. Отображение текущей даты и времени в подвале
function updateDateTime() {
    const dateTimeElement = document.getElementById('datetime');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDateTime = now.toLocaleString('ru-RU', options);
    dateTimeElement.textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);


setInterval(updateDateTime, 1000);
