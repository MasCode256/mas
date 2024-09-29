const frame = document.getElementById("frame");

async function getTextFromUrl(url) {
  try {
    // Выполняем запрос к URL
    const response = await fetch(url);

    // Проверяем, что запрос был успешным
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Читаем ответ и преобразуем его в текст
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error fetching text:", error);
    return null;
  }
}

async function goto(url) {
  console.log("Sucessfully function calling!");
  getTextFromUrl(url).then((text) => {
    if (text) {
      console.log(text);
      frame.innerHTML = text;
    }
  });
}
