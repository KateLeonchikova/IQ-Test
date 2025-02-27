import "./assets/styles/main.scss";
import Navigo from "navigo";
import { el, setChildren } from "redom";

import { renderHeader } from "./components/header";
import { renderMainPage } from "./components/mainPage";
import { renderFooter } from "./components/footer";

const router = new Navigo("/", { hash: true });

const app = document.getElementById("app");

router.on("/", () => {
  setChildren(app, renderHeader(), renderMainPage(), renderFooter());
});

router.on("/about", () => {
  app.innerHTML = "<h1>О нас</h1>";
});

router.resolve();
