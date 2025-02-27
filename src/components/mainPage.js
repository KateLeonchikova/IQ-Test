import { el } from "redom";
import btnIcon from "../assets/images/btn.svg";
import brainImg from "../assets/images/brain.svg";
import benefitsImg from "../assets/images/extra-benefits.png";
import { scrollToSection } from "../utils/scrollToSection";

export function renderMainPage() {
  const mainPage = el(
    "main",
    { className: "main" },
    el(
      "section",
      { className: "hero" },
      el(
        "div",
        { className: "container hero__container" },
        el(
          "span",
          { className: "hero__subtitle" },
          "Пройдите точный и быстрый"
        ),
        el("h1", { className: "hero__title" }, "Tест на определение IQ"),
        el("img", { src: brainImg, className: "hero__img" }),
        el("button", { className: "hero__button" }, "пройти тест"),
        el(
          "div",
          { className: "hero__descr" },
          el(
            "p",
            { className: "hero__descr--yellow" },
            "И получите рекомендации по развитию своего интеллекта"
          ),
          el(
            "p",
            { className: "hero__descr--white" },
            "и улучшению финансового благосостояния и личной жизни"
          )
        ),
        el(
          "button",
          {
            className: "hero__details",
            onclick: () => scrollToSection("#conclusion"),
          },
          el("img", { src: btnIcon, className: "hero__details--img" }),
          el("span", { className: "hero__details--text" }, "Подробнее")
        )
      )
    ),
    el(
      "section",
      { className: "benefits" },
      el(
        "div",
        { className: "container benefits__container" },
        el(
          "p",
          { className: "benefits__descr" },
          "Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать список рекомендаций для повышения этого показателя. "
        )
      )
    ),
    el(
      "section",
      { className: "extra-benefits" },
      el(
        "div",
        { className: "container extra-benefits__container" },
        el(
          "p",
          { className: "extra-benefits__text" },
          "Также по результатам теста ",
          el(
            "span",
            { className: "extra-benefits__text--bold" },
            "ВЫ ПОЛУЧИТЕ"
          ),
          " подробные ",
          el("span", { className: "extra-benefits__text--bold" }, "СОВЕТЫ"),
          " по определению наиболее перспективной ",
          el(
            "span",
            { className: "extra-benefits__text--bold" },
            "ДЛЯ ВАШЕГО ТИПА интеллекта СФЕРЫ ДЕЯТЕЛЬНОСТИ,"
          ),
          " которая принесет вам скорейший финансовый результат."
        ),
        el("img", { src: benefitsImg, className: "extra-benefits__img" }),
        el("button", { className: "extra-benefits__button" }, "пройти тест")
      )
    ),
    el(
      "section",
      { className: "conclusion", id: "conclusion" },
      el(
        "div",
        { className: "container conclusion__container" },
        el(
          "p",
          { className: "conclusion__text" },
          "Прохождение теста займет у вас не более ",
          el("span", { className: "conclusion__text--yellow" }, "12 минут"),
          ", а его ",
          el("span", { className: "conclusion__text--bold" }, "результаты"),
          " вы сможете ",
          el(
            "span",
            { className: "conclusion__text--yellow" },
            "использовать всю жизнь."
          )
        ),
        el(
          "div",
          { className: "conclusion__wrapper" },
          el(
            "p",
            { className: "conclusion__wrapper_descr" },
            "Профессиональная интерпретация и детально ",
            el(
              "span",
              { className: "conclusion__wrapper_descr--bold" },
              "проработанные рекомендации"
            ),
            " позволят вам качественно  ",
            el(
              "span",
              { className: "conclusion__wrapper_descr--bold" },
              "изменить все аспекты своей жизни:"
            ),
            " от финансового до любовного."
          )
        ),
        el("button", { className: "conclusion__btn" }, "пройти тест")
      )
    )
  );

  return mainPage;
}
