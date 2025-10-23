let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
function startTest() {
// Установите тестовый текст
document.getElementById("inputText").value = testText;

// Сбросьте ввод пользователя и вывод
let userInput = document.getElementById("userInput");
userInput.value = "";
userInput.readOnly = false;
userInput.focus();

document.getElementById("output").innerHTML = "";

// Запустите таймер
startTime = new Date().getTime();
}
 function endTest() {
            endTime = new Date().getTime();

            // Отключить ввод пользователя
            document.getElementById("userInput").readOnly = true;

            // Рассчитать прошедшее время и количество слов в минуту (WPM)
            var timeElapsed = (endTime - startTime) / 1000; // в секундах
            var userTypedText = document.getElementById("userInput").value;

            // Разделить текст с помощью регулярного выражения для правильного подсчета слов
            var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                return word !== "";
            }).length;

            var wpm = 0; // Значение по умолчанию

            if (timeElapsed !== 0 && !isNaN(typedWords)) {
                wpm = Math.round((typedWords / timeElapsed) * 60);
            }

            // Отобразить результаты
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>Результаты теста на печать:</h2>" +
                "<p>Набрано слов: " + typedWords + "</p>" +
                "<p>Прошедшее время: " + timeElapsed.toFixed(2) + " секунд</p>" +
                "<p>Слов в минуту (WPM): " + wpm + "</p>";
            }