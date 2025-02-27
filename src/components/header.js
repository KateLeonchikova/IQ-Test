import { el } from "redom";

export function renderHeader() {
  const header = el("header", { className: "header" }, "HEADER");

  return header;
}
