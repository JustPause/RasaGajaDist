import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './prerender_CQD0AcWy.mjs';
import { $ as $$Image, a as $$Layout } from './Layout_DV8QEiCP.mjs';
import { A as AUTOPORTRETAS } from './AUTOPORTRETAS_oiwTb9lt.mjs';
import { P as Pedos_kelyja } from './PEDOS_KELYJE_BM7DZNXY.mjs';
import { $ as $$TextDiscriosionButton } from './TextDiscriosionButton_CYXOR4I1.mjs';

const $$ImageInDiv = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ImageInDiv;
  const { img, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-1 flex items-center justify-center md:mx-0 md:h-96 md:w-120"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": alt, "width": img / 3, "class": `rounded-2xl max-h-full max-w-full object-contain h-auto w-auto imgFadeIn` })} </div>`;
}, "/home/justinas/Programming/RasoSvetaine/src/components/ImageInDiv.astro", void 0);

const $$ApieSave = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col md:flex-row"> ${renderComponent($$result2, "TextDiscriosionButton", $$TextDiscriosionButton, { "title": "Autoportretas", "body": "Esu degte i\u0161degta Meil\u0117s - \u017Demei ir Dangui, \u017Dmogui ir \u017Dod\u017Eiui...", "link": "/autoportretas" })} <div class="mx-1 flex h-full items-center justify-center md:mx-0 lg:w-200"> ${renderComponent($$result2, "Image", $$Image, { "src": AUTOPORTRETAS, "width": AUTOPORTRETAS.width / 3, "alt": "Ra\u0161ytoja autoportretas", "class": "imgFadeIn h-full w-full max-w-96 rounded-2xl object-cover sm:h-auto sm:max-w-full" })} </div> </div> </div> <div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col md:flex-row"> ${renderComponent($$result2, "ImageInDiv", $$ImageInDiv, { "img": Pedos_kelyja, "alt": "Rasytoja nuotrauka" })} ${renderComponent($$result2, "TextDiscriosionButton", $$TextDiscriosionButton, { "title": "P\u0117dos kelyje", "body": "Pirm\u0105syk vie\u0161ai - respublikin\u0117je spaudoje - prabilau trylikamet\u0117", "link": "/pedos-kelyje" })} </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/apie-save.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/apie-save.astro";
const $$url = "/apie-save";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ApieSave,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
