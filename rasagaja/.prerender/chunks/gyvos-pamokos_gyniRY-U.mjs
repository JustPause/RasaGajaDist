import { c as createComponent, a as $$Layout } from './Layout_PTA7Q5Nv.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BsIHGwUd.mjs';

const $$GyvosPamokos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GyvosPamokos;
  const Pavadinimas = Astro2.url.pathname.slice(11).replaceAll("-", " ");
  const gyvos_pamokos = [
    "mokyklininės dienos.",
    "pedagoginė studentės praktika.",
    "jaunos mokytojos dienoraštis.",
    "lituanistės užrašai.",
    "valdorfo istorijos pamokos.",
    "žiliems bendraklasiams.",
    "buvusiems auklėtiniams."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Pavadinimas, "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header capitalize">${Pavadinimas}</p> <div class="skireliai"> ${gyvos_pamokos.map((pamoka) => renderTemplate`<p>${pamoka}</p>`)} </div> </div> </div>` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/gyvos-pamokos.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/skyreliai/gyvos-pamokos.astro";
const $$url = "/skyreliai/gyvos-pamokos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GyvosPamokos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
