import { c as createComponent, a as $$Layout } from './Layout_PTA7Q5Nv.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BsIHGwUd.mjs';

const $$GajosTradicijos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GajosTradicijos;
  const Pavadinimas = Astro2.url.pathname.slice(11).replaceAll("-", " ");
  const gajos_tradicijos = [
    "mergaičių stovykla 6-oje valdorfo klasėje.",
    "tradicinė valdorfo šeštokų kelionė į kalnus.",
    "mokytojų diena kauno valdorfo mokykloje 2018 m.",
    "žibintų šventė.",
    "advento sodelis.",
    "valdorfo miuziklai.",
    "valdorfo mokyklos internetinis puslapis 2010 m."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Pavadinimas, "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header capitalize">${Pavadinimas}</p> <div class="skireliai"> ${gajos_tradicijos.map((tradicija) => renderTemplate`<p>${tradicija}</p>`)} </div> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/gajos-tradicijos.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/gajos-tradicijos.astro";
const $$url = "/skyreliai/gajos-tradicijos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GajosTradicijos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
