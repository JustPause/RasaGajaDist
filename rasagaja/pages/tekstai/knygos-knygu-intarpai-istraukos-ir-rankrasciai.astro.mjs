import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3T3oDyi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_CNJUpmtr.mjs';
export { renderers } from '../../renderers.mjs';

const $$KnygosKnyguIntarpaiIstraukosIrRankrasciai = createComponent(($$result, $$props, $$slots) => {
  const knygos = [
    "Gyvos pamokos. Gro\u017Ein\u0117s pedagogikos knyga apie antroposofin\u0117s istorijos pamokas valdorfo mokykloje. 2012-2013 m.",
    "R\u016Bm\u0173 virtuv\u0117. Juodojo humoro pedagoginis dienora\u0161tis. 2014-2015 m.",
    "Mokykliniai vaidinimai. Scenarij\u0173 ir libret\u0173 knyga. 2015 m.",
    "Kalbos kar\u016Bna. Knyga apie antroposofin\u0119 kalbos fenomeno samprat\u0105. 2017 m.",
    "Juodvarniai. Antroposofin\u0117 pasakos \u201Edvylika broli\u0173, juodvarniais lakstan\u010Di\u0173\u201C interpretacija. 2018 m.",
    "Gruod\u017Eio lai\u0161kai penkiolikmetei dukrai. 2018 m.",
    "Apie tave ir tau. 2018 m.",
    "\u0160irdies u\u017Ekalb\u0117jimas. Nuo 2020 m.",
    "Mintys klaj\u016Bn\u0117s. 2021 m. - apie tave ir tau.",
    "M\u016Bs\u0173 irena. 2023 m. - ypatingoji.",
    "Nemunai teka \u012F drakono kalnus. 2022-2025 m.",
    "Nemunai teka \u012F drakono kalnus. Audio knyga. 2024-2025 m."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Surinkti save \u012F sauj\u0105", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">Knygos. Knygų rankraščiai, intarpai, ištraukos.</p> <div class="w-full px-8 *:indent-8 *:uppercase sm:max-w-[76.5rem]"> ${knygos.map((knyga) => renderTemplate`<p>${knyga}</p>`)} </div> <div></div> </div> </div> ` })}`;
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
