import { el } from "redom";
import { scrollToSection } from "../utils/scrollToSection";

export function renderHeader() {
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    const menu = document.querySelector(".header__nav");
    const burgerButton = document.querySelector(".header__burger");

    if (menu && burgerButton) {
      if (isMenuOpen) {
        menu.classList.add("header__nav--open");
        burgerButton.classList.add("header__burger--open");
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("click", handleOutsideClick);
      } else {
        menu.classList.remove("header__nav--open");
        burgerButton.classList.remove("header__burger--open");
        document.removeEventListener("keydown", handleKeyPress);
        document.removeEventListener("click", handleOutsideClick);
      }
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Escape" || event.key === "Enter") {
      toggleMenu(false);
    }
  }

  function handleOutsideClick(event) {
    const menu = document.querySelector(".header__nav");
    const burgerButton = document.querySelector(".header__burger");

    if (!menu.contains(event.target) && !burgerButton.contains(event.target)) {
      toggleMenu(false);
    }
  }

  const header = el(
    "header",
    { className: "header" },
    el(
      "div",
      { className: "container" },
      el(
        "div",
        { className: "header__menu" },
        el(
          "button",
          {
            className: "header__burger",
            onclick: toggleMenu,
            "aria-label": "Открыть меню",
          },
          el("span"),
          el("span"),
          el("span")
        ),
        el(
          "nav",
          { className: "header__nav" },
          el(
            "ul",
            { className: "header__nav-list" },
            el(
              "li",
              { className: "header__nav-item" },
              el(
                "a",
                {
                  className: "header__nav-link",
                  href: "/",
                  "aria-label": "Перейти на главную страницу",
                },
                "Главная"
              )
            ),
            el(
              "li",
              { className: "header__nav-item" },
              el(
                "a",
                {
                  className: "header__nav-link",
                  href: "#",
                  onclick: () => scrollToSection("#conclusion"),
                },
                "Информация о тесте"
              )
            ),
            el(
              "li",
              { className: "header__nav-item" },
              el(
                "a",
                { className: "header__nav-link", href: "#" },
                "Пройти тест"
              )
            )
          )
        )
      )
    )
  );

  return header;
}
