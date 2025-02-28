import { el } from "redom";
import logoImg from "../assets/images/brain.svg";

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

  const header = el("header", { className: "header" });
  const container = el("div", { className: "container" });

  if (window.location.pathname !== "/") {
    const logo = el(
      "div",
      { className: "header__wrapper" },
      el(
        "a",
        {
          className: "header__wrapper_link",
          href: "/",
          "aria-label": "Перейти на главную страницу",
        },
        el("img", { className: "header__wrapper_logo", src: logoImg })
      )
    );

    let logoText = el(
      "p",
      { className: "header__wrapper_title" },
      "тест на определение IQ"
    );

    if (window.location.pathname === "/results") {
      logoText.classList.add("header__wrapper_title-results");
      logoText.innerHTML = "Готово!";
    }

    logo.appendChild(logoText);
    container.appendChild(logo);
  }

  const menu = el(
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
              href: "/#conclusion",
            },
            "Информация о тесте"
          )
        ),
        el(
          "li",
          { className: "header__nav-item" },
          el(
            "a",
            { className: "header__nav-link", href: "/test" },
            "Пройти тест"
          )
        )
      )
    )
  );

  container.prepend(menu);
  header.appendChild(container);

  return header;
}
