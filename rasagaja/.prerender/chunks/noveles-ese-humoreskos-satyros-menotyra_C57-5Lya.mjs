import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_CQD0AcWy.mjs';
import { a as $$Layout } from './Layout_DV8QEiCP.mjs';

const $$NovelesEseHumoreskosSatyrosMenotyra = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://rasagaja.lt/backend/doc/noveles");
  const noveles = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Surinkti save \u012F sauj\u0105", "subtitle": "" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">Novelės. Esė. Humoreskos. Satyros. Menotyra.</p> <div class="*:bg-dark-primary-darker flex w-full flex-col gap-4 *:rounded-xl *:p-2 *:uppercase sm:max-w-306"> ${noveles.map((novele) => renderTemplate`<a${addAttribute(`/tekstai/noveles/${novele}`, "href")}>Sugrazinti senaji dysina</a>`)} </div> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/noveles-ese-humoreskos-satyros-menotyra.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/noveles-ese-humoreskos-satyros-menotyra.astro";
const $$url = "/tekstai/noveles-ese-humoreskos-satyros-menotyra";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NovelesEseHumoreskosSatyrosMenotyra,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
