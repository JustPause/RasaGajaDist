import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_CQD0AcWy.mjs';
import { a as $$Layout } from './Layout_DV8QEiCP.mjs';

const $$GajosTradicijos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GajosTradicijos;
  const Pavadinimas = Astro2.url.pathname.slice(11).replaceAll("-", " ");
  const gajos_tradicijos = [
    "mergai\u010Di\u0173 stovykla 6-oje valdorfo klas\u0117je.",
    "tradicin\u0117 valdorfo \u0161e\u0161tok\u0173 kelion\u0117 \u012F kalnus.",
    "mokytoj\u0173 diena kauno valdorfo mokykloje 2018 m.",
    "\u017Eibint\u0173 \u0161vent\u0117.",
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
