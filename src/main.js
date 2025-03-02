import "./assets/styles/main.scss";
import Navigo from "navigo";
import { setChildren } from "redom";
import { initFooterScroll } from "./utils/scrollFooter";
import { renderHeader } from "./components/header";
import { renderMainPage } from "./components/mainPage";
import { renderTestPage } from "./components/testPage";
import { renderResultsPage } from "./components/resultPage";
import { renderFooter } from "./components/footer";

const router = new Navigo("/");

const app = document.getElementById("app");

const header = renderHeader();
const footer = renderFooter();

function renderPage(content) {
  setChildren(app, header, content, footer);

  if (footer) {
    initFooterScroll();
  }
}

router
  .on({
    "/": () => {
      renderPage(renderMainPage());
    },
    "/test": () => {
      renderPage(renderTestPage());
    },
    "/results": () => {
      renderPage(renderResultsPage());
    },
  })
  .resolve();
