import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_CQD0AcWy.mjs';
import { a as $$Layout } from './Layout_DV8QEiCP.mjs';

const $$GrazusVeidai = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GrazusVeidai;
  const Pavadinimas = Astro2.url.pathname.slice(11).replaceAll("-", " ");
  const gra\u017E\u016Bs_veidai = [
    "rojaus sodininkas. \u017Eodis t\u0117\u010Diui jonui mickevi\u010Diui.",
    "mano aukl\u0117toja. lai\u0161kas anai vasiljevnai \u017Eukovai.",
    "ypatingoji. d\u0117stytoja ir teatrolog\u0117 irena veisait\u0117.",
    "pirmoji. valdorfo pedagogikos pradinink\u0117 lietuvoje danut\u0117 ona \u017Eilien\u0117.",
    "valdorfo mohikan\u0117. euritmist\u0117 liuda adomaityt\u0117-troickaja.",
    "gyvenimas pagal sauli\u0173. gamtin\u0117s \u017Eemdirbyst\u0117s pradininkas saulius jasionis.",
    "mergi\u016Bk\u0161t\u0117 diriguoja paradui. muzikos mokytoja miglena perminien\u0117.",
    "auksin\u0117 skulpt\u016Br\u0117l\u0117. \u0161oki\u0173 mokytoja justina li\u017Eaitien\u0117.",
    "karys ir poetas. mokytojas rimantas \u017Eukas.",
    "auk\u0161tai bangai kylant. pro memoria pribuv\u0117jai bangai kulikauskaitei. ginekolog\u0117 violeta ma\u010Diulaitien\u0117.",
    "vasara su margu geniuku. vaik\u0173 literat\u016Bros \u017Einovas k\u0119stutis urba.",
    "juodojo humoro meistras. valdorfietis ra\u0161ytojas antanas suodys.",
    "rebeka una ragina. valdorfiet\u0117 ra\u0161ytoja rebeka una.",
    "su charizma. lai\u0161kas menotyrininkei aldonai snitkuvienei.",
    "gimusi scenai. lituanist\u0117 vilma katkauskien\u0117.",
    "teatras \u2012 tai audra. okt vadybinink\u0117 audra \u017Eukaityt\u0117.",
    "daug \u017Eadanti. lai\u0161kas spektaklio \u201E\u017Ead\u0117toji\u201C re\u017Eisierei felicijai feiferei.]"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Pavadinimas, "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header capitalize">${Pavadinimas}</p> <div class="skireliai"> ${gra\u017E\u016Bs_veidai.map((veidas) => renderTemplate`<p>${veidas}</p>`)} </div> </div> </div> ` })}`;
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
