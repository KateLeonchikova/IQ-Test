import "./assets/styles/main.scss";
import Navigo from "navigo";
import { el, setChildren } from "redom";

import { renderHeader } from "./components/header";
import { renderMainPage } from "./components/mainPage";
import { renderTestPage } from "./components/testPage";
import { renderFooter } from "./components/footer";

const router = new Navigo("/");

const app = document.getElementById("app");

router
  .on({
    "/": () => {
      setChildren(app, renderHeader(), renderMainPage(), renderFooter());
    },

    "/test": () => {
      setChildren(app, renderHeader(), renderTestPage(), renderFooter());
    },
  })
  .resolve();
