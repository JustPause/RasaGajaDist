import { c as createComponent, a as $$Layout } from './Layout_PTA7Q5Nv.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_BsIHGwUd.mjs';

const $$StraipsniaiPaskaituKonspektaiDienorasciaiLaiskai = createComponent(($$result, $$props, $$slots) => {
  const skyreliai = [
    {
      text: "antroposofijos paskaitų konspektai",
      link: "/skyreliai/antroposofijos-paskaitu-konspektai"
    },
    {
      text: "gyvenimo filosofija",
      link: "/skyreliai/gyvenimo-filosofija"
    },
    {
      text: "kūno ir judesio galia",
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
      text: "gražūs veidai",
      link: "/skyreliai/grazus-veidai"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Surinkti save į saują", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">
Straipsniai. Paskaitų konspektai. Dienoraščiai. Laiškai.
</p> <div class="*:hover:bg-dark-text-light *:hover:text-dark-primary-darker *:border-dark-text-light tra flex flex-col gap-4 divide-y-4 text-center *:rounded-none *:rounded-t-xl *:p-4 *:uppercase *:duration-400 sm:max-w-306"> ${skyreliai.map((dat) => renderTemplate`<a${addAttribute(dat.link, "href")}>${dat.text}</a>`)} </div> </div> </div> ` })}`;
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
