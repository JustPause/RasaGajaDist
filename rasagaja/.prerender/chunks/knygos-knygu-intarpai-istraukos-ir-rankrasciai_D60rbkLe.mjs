import { c as createComponent, a as $$Layout } from './Layout_PTA7Q5Nv.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BsIHGwUd.mjs';

const $$KnygosKnyguIntarpaiIstraukosIrRankrasciai = createComponent(($$result, $$props, $$slots) => {
  const knygos = [
    {
      pavadinimas: "Gyvos pamokos. Grožinės pedagogikos knyga apie antroposofinės istorijos pamokas valdorfo mokykloje",
      metai: "2012-2013"
    },
    {
      pavadinimas: "Rūmų virtuvė. Juodojo humoro pedagoginis dienoraštis",
      metai: "2014-2015"
    },
    {
      pavadinimas: "Mokykliniai vaidinimai. Scenarijų ir libretų knyga",
      metai: "2015"
    },
    {
      pavadinimas: "Kalbos karūna. Knyga apie antroposofinę kalbos fenomeno sampratą",
      metai: "2017"
    },
    {
      pavadinimas: "Juodvarniai. Antroposofinė pasakos „dvylika brolių, juodvarniais lakstančių“ interpretacija",
      metai: "2018"
    },
    { pavadinimas: "Gruodžio laiškai penkiolikmetei dukrai", metai: "2018" },
    { pavadinimas: "Apie tave ir tau", metai: "2018" },
    { pavadinimas: "Širdies užkalbėjimas", metai: "Nuo 2020" },
    { pavadinimas: "Mintys klajūnės", metai: "2021 - apie tave ir tau." },
    { pavadinimas: "Mūsų irena", metai: "2023 - ypatingoji." },
    { pavadinimas: "Nemunai teka į drakono kalnus", metai: "2022-2025" },
    {
      pavadinimas: "Nemunai teka į drakono kalnus. Audio knyga",
      metai: "2024-2025"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Surinkti save į saują", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">Knygos. Knygų rankraščiai, intarpai, ištraukos.</p> <div class="w-full gap-4 px-8 *:indent-24 *:uppercase sm:max-w-306"> ${knygos.map((knyga) => renderTemplate`<p>${knyga}</p>`)} </div> <div></div> </div> </div> ` })}`;
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
