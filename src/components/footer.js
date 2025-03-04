import { el } from "redom";
import copyrightImg from "../assets/svg/copyright.svg";

export function renderFooter() {
  if (window.location.pathname === "/test") {
    return;
  }

  const currentYear = new Date().getFullYear();

  const footerContent =
    window.location.pathname === "/results"
      ? el(
          "div",
          { className: "footer__container" },
          el(
            "div",
            { className: "footer__results_wrapper" },
            el(
              "p",
              { className: "footer__results_text" },
              "TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, SI CA ACCEPTATI CONDIȚIILE DE UTILIZARE ALE ACESTUI SERVICIU. UTILIZAREA LUI IMPLICA RESPECTAREA POLITICII DE CONFIDENȚIALITATE ȘI A TOATE ORICE REGULI ȘI REGULAMENTE APLICABILE. NE REZERVĂM DREPTUL DE A MODIFICA ACESTE TERMENE ȘI CONDIȚII FĂRĂ PREVIZARE."
            )
          )
        )
      : el(
          "div",
          { className: "footer__container" },
          el("img", { src: copyrightImg }),
          el("span", { className: "footer__year" }, currentYear)
        );

  const footer = el(
    "footer",
    { className: "footer" },
    el("div", { className: "container" }, footerContent)
  );

  return footer;
}
