import { c as createComponent, a as $$Layout } from './Layout_PTA7Q5Nv.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BsIHGwUd.mjs';

const $$AntroposofijosPaskaituKonspektai = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AntroposofijosPaskaituKonspektai;
  const Pavadinimas = Astro2.url.pathname.slice(11).replaceAll("-", " ");
  const antroposofijos_paskaitų_konspektai = [
    "pirmosios antroposofijos paskaitos lietuvoje 1992-1993 m.",
    "wiss seminaras prahoje 2009 m.",
    "wiss seminaras godolo, vengrijoje 2010 m.",
    "iao valdorfo seminaras rygoje 2011 m.",
    "vokiečių organizuoti valdorfo mokytojų rengimo kursai lietuvoje 2011-2012 m.",
    "aros atajan žmogotyros ir senųjų civilizacijų istorijos seminaras 2013 m.",
    "aros atajan žmogotyros ir istorijos seminaras 2015 m.",
    "rimanto žuko žmogotyros paskaitų ciklas 2017 m.",
    "antroposofo johaneso grainerio paskaitos 2019 m."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Pavadinimas, "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header capitalize">${Pavadinimas}</p> <div class="skireliai"> ${antroposofijos_paskaitų_konspektai.map((konspekts) => renderTemplate`<p>${konspekts}</p>`)} </div> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/antroposofijos-paskaitu-konspektai.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/antroposofijos-paskaitu-konspektai.astro";
const $$url = "/skyreliai/antroposofijos-paskaitu-konspektai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AntroposofijosPaskaituKonspektai,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
