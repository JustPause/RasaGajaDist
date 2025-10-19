import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_D3T3oDyi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_D4JteZMS.mjs';
export { renderers } from '../../renderers.mjs';

const $$StraipsniaiPaskaituKonspektaiDienorasciaiLaiskai = createComponent(($$result, $$props, $$slots) => {
  const skyreliai = [
    {
      text: "antroposofijos paskait\u0173 konspektai",
      link: "/skyreliai/antroposofijos-paskaitu-konspektai"
    },
    {
      text: "gyvenimo filosofija",
      link: "/skyreliai/gyvenimo-filosofija"
    },
    {
      text: "k\u016Bno ir judesio galia",
      link: "/skyreliai/kuno-ir-judesio-galia"
    },
    {
      text: "gajos tradicijos",
      link: "/skyreliai/gajos-tradicijos"
    },
    {
      text: "gyvos pamokos",
      link: "/skyreliai/gyvos-pamokos"
    },
    {
      text: "gra\u017E\u016Bs veidai",
      link: "/skyreliai/grazus-veidai"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Surinkti save \u012F sauj\u0105", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">
Straipsniai. Paskaitų konspektai. Dienoraščiai. Laiškai.
</p> <div class="flex flex-wrap items-stretch justify-center gap-4"> ${skyreliai.map((dat) => renderTemplate`<a class="bg-dark-primary-darker 2xs:w-72 bouttonAnimasion text-dark-text-light h-auto w-full rounded-2xl p-4 text-center text-xl xl:p-6"${addAttribute(dat.link, "href")}> ${dat.text} </a>`)} </div> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/straipsniai-paskaitu-konspektai-dienorasciai-laiskai.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/straipsniai-paskaitu-konspektai-dienorasciai-laiskai.astro";
const $$url = "/tekstai/straipsniai-paskaitu-konspektai-dienorasciai-laiskai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StraipsniaiPaskaituKonspektaiDienorasciaiLaiskai,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
