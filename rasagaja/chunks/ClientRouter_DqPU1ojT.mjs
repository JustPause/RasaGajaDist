import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, d as createAstro, g as renderScript } from './astro/server_WWt00ON-.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const tabs = [
    { name: "Pagrindinis", link: "/" },
    { name: "Apie save", link: "/apie-save" },
    { name: "Tekstai", link: "/tekstai" },
    { name: "Audio \u012Fra\u0161ai", link: "/audio-ira\u0161ai" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed flex-row w-full xs:gap-6 sm:gap-8 md:gap-12 lg:gap-14 xl:gap-16 justify-end items-center px-4 bg-accent hidden sm:flex z-50"> ${tabs.map((tab) => renderTemplate`<a class="header5 hover:underline decoration-primary py-2 md:py-3 xl:py-4 duration-500 rounded-2xl select-none"${addAttribute(tab.link, "href")}> ${tab.name} </a>`)} </nav> <nav class="fixed flex-row w-full sm:gap-2 md:gap-6 lg:gap-12 h-8 justify-end items-center px-4 bg-accent sm:hidden flex z-50"></nav>`;
}, "/home/justinas/Programming/RasoSvetaine/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full h-10 mt-16 bg-accent flex justify-center items-center relative bottom-0"> <p class="select-none">RasaGaja © 2025</p> </footer>`;
}, "/home/justinas/Programming/RasoSvetaine/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://rasagaja.lt");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml" title="Rasa Gaja"', '><meta name="generator"', '><link rel="canonical"', "><title>Rasa Gaja - ", '</title><meta name="title"', '><meta name="description" content="Rasagaja - Skaitiniai"><meta name="robots" content="index, follow"><script type="application/ld+json">\n  {\n    "@context": "https://schema.org",\n    "name": "Rasagaja",\n    "url": "https://rasagaja.lt"\n  }\n<\/script>'])), addAttribute(new URL("rss.xml", Astro2.site), "href"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"));
}, "/home/justinas/Programming/RasoSvetaine/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro("https://rasagaja.lt");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/justinas/Programming/RasoSvetaine/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/justinas/Programming/RasoSvetaine/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$Footer as $, $$Header as a, $$ClientRouter as b, $$BaseHead as c };
