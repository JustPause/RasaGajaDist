import { c as createComponent, a as $$Layout } from './Layout_PTA7Q5Nv.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BsIHGwUd.mjs';

const $$GyvenimoFilosofija = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GyvenimoFilosofija;
  const Pavadinimas = Astro2.url.pathname.slice(11).replaceAll("-", " ");
  const gyvenimo_filosofija = [
    "mamos dienoraštis.",
    "pasakos suaugusiems.",
    "antroposofai apie amžiaus tarpsnius.",
    "apie iniciacijos ir ritualo prasmę.",
    "gyvenimo knyga.",
    "gruodžio laiškai penkiolikmetei dukrai.",
    "apie tave ir tau. laiškai penkiolikmečiui.",
    "gyvenimas pagal saulių."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Pavadinimas, "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header capitalize">${Pavadinimas}</p> <div class="skireliai"> ${gyvenimo_filosofija.map((filosofija) => renderTemplate`<p>${filosofija}</p>`)} </div> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/gyvenimo-filosofija.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/gyvenimo-filosofija.astro";
const $$url = "/skyreliai/gyvenimo-filosofija";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GyvenimoFilosofija,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
