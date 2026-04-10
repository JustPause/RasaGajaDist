import { c as createComponent, a as $$Layout } from './Layout_PTA7Q5Nv.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BsIHGwUd.mjs';

const $$GrazusVeidai = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GrazusVeidai;
  const Pavadinimas = Astro2.url.pathname.slice(11).replaceAll("-", " ");
  const gražūs_veidai = [
    "rojaus sodininkas. žodis tėčiui jonui mickevičiui.",
    "mano auklėtoja. laiškas anai vasiljevnai žukovai.",
    "ypatingoji. dėstytoja ir teatrologė irena veisaitė.",
    "pirmoji. valdorfo pedagogikos pradininkė lietuvoje danutė ona žilienė.",
    "valdorfo mohikanė. euritmistė liuda adomaitytė-troickaja.",
    "gyvenimas pagal saulių. gamtinės žemdirbystės pradininkas saulius jasionis.",
    "mergiūkštė diriguoja paradui. muzikos mokytoja miglena perminienė.",
    "auksinė skulptūrėlė. šokių mokytoja justina ližaitienė.",
    "karys ir poetas. mokytojas rimantas žukas.",
    "aukštai bangai kylant. pro memoria pribuvėjai bangai kulikauskaitei. ginekologė violeta mačiulaitienė.",
    "vasara su margu geniuku. vaikų literatūros žinovas kęstutis urba.",
    "juodojo humoro meistras. valdorfietis rašytojas antanas suodys.",
    "rebeka una ragina. valdorfietė rašytoja rebeka una.",
    "su charizma. laiškas menotyrininkei aldonai snitkuvienei.",
    "gimusi scenai. lituanistė vilma katkauskienė.",
    "teatras ‒ tai audra. okt vadybininkė audra žukaitytė.",
    "daug žadanti. laiškas spektaklio „žadėtoji“ režisierei felicijai feiferei.]"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Pavadinimas, "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header capitalize">${Pavadinimas}</p> <div class="skireliai"> ${gražūs_veidai.map((veidas) => renderTemplate`<p>${veidas}</p>`)} </div> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/grazus-veidai.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/grazus-veidai.astro";
const $$url = "/skyreliai/grazus-veidai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GrazusVeidai,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
