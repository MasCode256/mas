var colorPicker = document.getElementById("color-picker");
var selectedColor = document.getElementById("selected-color");
var colorCodeInput = document.getElementById("color-code");

// Обработчик события изменения цвета
colorPicker.addEventListener("input", function () {
  // Обновляем фон элемента и значение цветового кода
  colorCodeInput.value = colorPicker.value;

  // JavaScript для получения и установки значения переменной

  // Получение значения переменной
  var root = document.documentElement;
  var myVarValue = getComputedStyle(root).getPropertyValue("--primary");
  console.log("Текущее значение переменной:", myVarValue);

  // Установка нового значения переменной
  var newValue = colorCodeInput.value; // Новое значение для переменной
  root.style.setProperty("--primary", newValue);

  // Проверка, что значение изменилось
  var updatedMyVarValue = getComputedStyle(root).getPropertyValue("--primary");
  console.log("Обновленное значение переменной:", updatedMyVarValue);

  localStorage.setItem("primary-color", updatedMyVarValue);
});

// JavaScript для получения и установки значения переменной

// Получение значения переменной
var root = document.documentElement;
var myVarValue = getComputedStyle(root).getPropertyValue("--primary");
console.log("Текущее значение переменной:", myVarValue);

// Установка нового значения переменной
var newValue = localStorage.getItem("primary-color"); // Новое значение для переменной
root.style.setProperty("--primary", newValue);

// Проверка, что значение изменилось
var updatedMyVarValue = getComputedStyle(root).getPropertyValue("--primary");
console.log("Обновленное значение переменной:", updatedMyVarValue);
