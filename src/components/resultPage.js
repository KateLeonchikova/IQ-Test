import { el } from "redom";
import { startTimer } from "../utils/timer";
import { getData } from "../api/getData";

export function renderResultsPage() {
  const resultPage = el(
    "main",
    { className: "results" },
    el(
      "div",
      { className: "container" },
      el(
        "div",
        { className: "results__container" },
        el(
          "h3",
          { className: "results__subtitle" },
          "Ваш результат рассчитан: "
        ),
        el(
          "p",
          { className: "results__text" },
          el(
            "span",
            { className: "results__text_underline" },
            "Вы относитесь к 3%"
          ),
          " респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону! "
        ),
        el(
          "h2",
          { className: "results__title" },
          "Скорее получите свой результат!"
        ),
        el(
          "p",
          { className: "results__warning" },
          "В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона"
        ),
        el(
          "p",
          { className: "results__timer" },
          "Звоните скорее, запись доступна всего ",
          el("span", { className: "results__timer_counting" }),
          " минут"
        ),
        el(
          "button",
          { className: "results__button", onclick: fetchDataOnClick },
          "Позвонить и прослушать результат"
        ),
        el("div", { className: "results__data" })
      )
    )
  );

  const timerElement = resultPage.querySelector(".results__timer_counting");
  startTimer(10, timerElement);

  return resultPage;
}

async function fetchDataOnClick() {
  try {
    const data = await getData();

    displayData(data);
  } catch (err) {
    console.error("Ошибка при получении данных", error);
  }
}

function displayData(data) {
  const dataWrapper = document.querySelector(".results__data");

  dataWrapper.innerHTML = "";

  const details = el(
    "div",
    { className: "results__data_content" },
    el("p", { className: "results__data_info" }, `Имя: ${data.name}`),
    el("p", { className: "results__data_info" }, `Пол: ${data.gender}`),
    el(
      "p",
      { className: "results__data_info" },
      `Дата рождения: ${data.birth_year}`
    ),
    el(
      "p",
      { className: "results__data_info" },
      `Цвет волос: ${data.hair_color}`
    ),
    el("p", { className: "results__data_info" }, `Цвет глаз: ${data.eye_color}`)
  );

  dataWrapper.appendChild(details);
}
