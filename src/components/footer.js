import { el } from "redom";
import copyrightImg from "../assets/images/copyright.svg";

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  if (window.location.pathname === "/test") {
    return;
  }

  const footer = el(
    "footer",
    { class: "footer" },
    el(
      "div",
      { className: "container footer__container" },
      el("img", { src: copyrightImg }),
      el("span", { className: "footer__year" }, currentYear)
    )
  );

  return footer;
}
