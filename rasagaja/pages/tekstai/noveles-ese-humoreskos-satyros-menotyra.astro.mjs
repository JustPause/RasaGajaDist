import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3T3oDyi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_CNJUpmtr.mjs';
export { renderers } from '../../renderers.mjs';

const $$NovelesEseHumoreskosSatyrosMenotyra = createComponent(($$result, $$props, $$slots) => {
  const noveles = [
    "Anemija jauni tekstai. Apie juos.",
    "Sergantis stebuklas, arba pantomimos paradoksai.",
    "Madoni\u0161ka nuotrauka.",
    "Komunalk\u0117 laisv\u0117je.",
    "Bandymas i\u0161eiti.",
    "Ultravioletin\u0117 novel\u0117.",
    "A\u0161 mokausi pirmoje valdorfo klas\u0117je."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Surinkti save \u012F sauj\u0105", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">Novelės. Esė. Humoreskos. Satyros. Menotyra.</p> <div class="w-full px-8 *:indent-8 *:uppercase sm:max-w-[76.5rem]"> ${noveles.map((novele) => renderTemplate`<p>${novele}</p>`)} </div> </div> </div> ` })}`;
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
