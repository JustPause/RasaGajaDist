import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_CQD0AcWy.mjs';
import { a as $$Layout } from './Layout_DV8QEiCP.mjs';

const $$KnygosKnyguIntarpaiIstraukosIrRankrasciai = createComponent(($$result, $$props, $$slots) => {
  const knygos = [
    {
      pavadinimas: "Gyvos pamokos. Gro\u017Ein\u0117s pedagogikos knyga apie antroposofin\u0117s istorijos pamokas valdorfo mokykloje",
      metai: "2012-2013"
    },
    {
      pavadinimas: "R\u016Bm\u0173 virtuv\u0117. Juodojo humoro pedagoginis dienora\u0161tis",
      metai: "2014-2015"
    },
    {
      pavadinimas: "Mokykliniai vaidinimai. Scenarij\u0173 ir libret\u0173 knyga",
      metai: "2015"
    },
    {
      pavadinimas: "Kalbos kar\u016Bna. Knyga apie antroposofin\u0119 kalbos fenomeno samprat\u0105",
      metai: "2017"
    },
    {
      pavadinimas: "Juodvarniai. Antroposofin\u0117 pasakos \u201Edvylika broli\u0173, juodvarniais lakstan\u010Di\u0173\u201C interpretacija",
      metai: "2018"
    },
    { pavadinimas: "Gruod\u017Eio lai\u0161kai penkiolikmetei dukrai", metai: "2018" },
    { pavadinimas: "Apie tave ir tau", metai: "2018" },
    { pavadinimas: "\u0160irdies u\u017Ekalb\u0117jimas", metai: "Nuo 2020" },
    { pavadinimas: "Mintys klaj\u016Bn\u0117s", metai: "2021 - apie tave ir tau." },
    { pavadinimas: "M\u016Bs\u0173 irena", metai: "2023 - ypatingoji." },
    { pavadinimas: "Nemunai teka \u012F drakono kalnus", metai: "2022-2025" },
    {
      pavadinimas: "Nemunai teka \u012F drakono kalnus. Audio knyga",
      metai: "2024-2025"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Surinkti save \u012F sauj\u0105", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">Knygos. Knygų rankraščiai, intarpai, ištraukos.</p> <div class="w-full gap-4 px-8 *:indent-24 *:uppercase sm:max-w-306"> ${knygos.map((knyga) => renderTemplate`<p>${knyga}</p>`)} </div> <div></div> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/knygos-knygu-intarpai-istraukos-ir-rankrasciai.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/knygos-knygu-intarpai-istraukos-ir-rankrasciai.astro";
const $$url = "/tekstai/knygos-knygu-intarpai-istraukos-ir-rankrasciai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$KnygosKnyguIntarpaiIstraukosIrRankrasciai,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
