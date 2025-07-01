import { d as createAstro, c as createComponent, a as renderTemplate, r as renderComponent, e as renderSlot, h as renderHead } from './astro/server_DawsWqd3.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Header, b as $$ClientRouter, c as $$BaseHead } from './ClientRouter_DJybakKp.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://rasagaja.lt");
const $$LayoutSecondary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutSecondary;
  const { title, subtitle } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", "", '</head> <body class="bg-background"> ', ' <script>\n            document.documentElement.classList.add("font-loading");\n\n            document.fonts.ready.then(() => {\n                document.documentElement.classList.remove("font-loading");\n            });\n        <\/script> <div class="w-[97%] flex max-w-[1920px] mx-auto pt-16 flex-col min-h-screen"> <div class="flex flex-row gap-8 mb-8"> <p class="header1Pavadinimas ml-8 select-none">', "</p> </div> ", " </div> ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title }), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), title, renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/justinas/Programming/RasoSvetaine/src/layouts/LayoutSecondary.astro", void 0);

export { $$LayoutSecondary as $ };
