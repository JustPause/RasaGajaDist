import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_CQD0AcWy.mjs';
import { a as $$Layout } from './Layout_DV8QEiCP.mjs';

const $$GyvosPamokos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GyvosPamokos;
  const Pavadinimas = Astro2.url.pathname.slice(11).replaceAll("-", " ");
  const gyvos_pamokos = [
    "mokyklinin\u0117s dienos.",
    "pedagogin\u0117 student\u0117s praktika.",
    "jaunos mokytojos dienora\u0161tis.",
    "lituanist\u0117s u\u017Era\u0161ai.",
    "valdorfo istorijos pamokos.",
    "\u017Eiliems bendraklasiams.",
    "buvusiems aukl\u0117tiniams."
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
