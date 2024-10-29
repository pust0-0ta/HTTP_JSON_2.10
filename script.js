
<script>
// Отправляем GET-запрос на локальный сервер для получения данных

fetch('http://localhost:3000/users')
.then(response => {
// Проверяем успешен ли запрос
if (!response.ok) {
throw new Error('Сетевая ошибка');
}
// Преобразуем ответ в JSON
return response.json();
})
.then(data => {
// Найдем элемент на странице, в который будем вставлять данные
const usersList = document.getElementById('users-list');
// Перебираем полученные данные и создаем элементы <li> для каждого пользователя
data.forEach(user => {
const li = document.createElement('li'); // Создаем элемент списка
li.textContent = `${user.name} (${user.email})`; // Добавляем текстовое содержимое
usersList.appendChild(li); // Добавляем элемент в список
});
})
.catch(error => {
// Обработка ошибок
console.error('Ошибка при получении данных:', error);
});

</script>
