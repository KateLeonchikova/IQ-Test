import { el } from "redom";

export function renderHeader() {
  const header = el("header", { class: "header" }, "HEADER");

  return header;
}
