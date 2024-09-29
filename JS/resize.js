const leftdiv = document.getElementById("left-div");

function handleResize() {
  var elements = document.querySelectorAll(".hide-on-screen-resize");

  // Перебираем все элементы и изменяем их стили

  if (window.innerWidth <= 800) {
    // Код для устройств с шириной экрана 600px и меньше
    console.log("Экран стал узким (ширина <= 600px)");

    elements.forEach(function (element) {
      console.log("Resizing...");
      element.style.display = "none";
    });
  } else {
    // Код для устройств с шириной экрана более 600px
    console.log("Экран стал широким (ширина > 600px)");

    elements.forEach(function (element) {
      console.log("Resizing...");
      element.style.display = "unset";
    });
  }
}

// Добавляем обработчик события resize на window
window.addEventListener("resize", handleResize);

// Вызываем функцию при загрузке страницы, чтобы убедиться, что стили применены сразу
handleResize();
