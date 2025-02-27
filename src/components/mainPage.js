import { el } from "redom";
import btnIcon from "../assets/images/btn.svg";

export function renderMainPage() {
  const mainPage = el(
    "main",
    { class: "main" },
    el(
      "section",
      { class: "main__first" },
      el(
        "div",
        { className: "container main__first--container" },
        el("span", { class: "main__subtitle" }, "Пройдите точный и быстрый"),
        el("h1", { class: "main__title" }, "Tест на определение IQ"),
        el("button", { class: "main__button" }, "пройти тест"),

        el(
          "div",
          { class: "main__descr" },
          el(
            "p",
            { class: "main__descr--yellow" },
            "И получите рекомендации по развитию своего интеллекта"
          ),
          el(
            "p",
            { class: "main__descr--white" },
            "и улучшению финансового благосостояния и личной жизни"
          )
        ),
        el(
          "button",
          { class: "main__details" },
          el("img", { src: btnIcon, class: "main__details--img" }),
          el("span", { class: "main__details--text" }, "Подробнее")
        )
      )
    ),
    el(
      "section",
      { class: "main__second" },
      el(
        "div",
        { className: "container main__second--container" },
        el(
          "p",
          { class: "main__benefits" },
          "Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать список рекомендаций для повышения этого показателя. "
        )
      )
    ),
    el(
      "section",
      { class: "main__third" },
      el("span", { class: "main__subtitle" }, "Пояснение критериев"),
      el("h1", { class: "main__title" }, "Этап 2: Тестирование")
    ),
    el(
      "section",
      { class: "main__fourth" },
      el("span", { class: "main__subtitle" }, "Результаты теста"),
      el("h1", { class: "main__title" }, "Этап 3: Подведение итогов")
    )
  );

  return mainPage;
}
