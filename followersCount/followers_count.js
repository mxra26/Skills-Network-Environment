let count = 0; // Initialize count to 0
function increaseCount() {
  count++; // Увеличить count на 1
  displayCount(); // Отобразить количество
  checkCountValue(); // Проверить значение count и отобразить сообщения
}
function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Отобразить количество в HTML
}
function checkCountValue() {
  if (count === 10) {
    alert("Ваш пост в Instagram набрал 10 подписчиков! Поздравляем!");
  } else if (count === 20) {
    alert("Ваш пост в Instagram набрал 20 подписчиков! Продолжайте в том же духе!");
  }
}