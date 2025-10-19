import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_D3T3oDyi.mjs';
import 'kleur/colors';
import { $ as $$Image, a as $$Layout } from '../chunks/Layout_D4JteZMS.mjs';
import { A as AUTOPORTRETAS } from '../chunks/AUTOPORTRETAS_DHbMvzVP.mjs';
import { P as Pedos_kelyja_ } from '../chunks/PEDOS_KELYJE_8fbASZFC.mjs';
import { $ as $$TextDiscriosionButton } from '../chunks/TextDiscriosionButton_rfX3Lz5V.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ImageInDiv = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageInDiv;
  const { img, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-1 flex items-center justify-center md:mx-0 md:h-96 md:w-120"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": alt, "class": `rounded-2xl max-h-full max-w-full object-contain h-auto w-auto imgFadeIn` })} </div>`;
}, "/home/justinas/Programming/RasoSvetaine/src/components/ImageInDiv.astro", void 0);

const $$ApieSave = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col md:flex-row"> ${renderComponent($$result2, "TextDiscriosionButton", $$TextDiscriosionButton, { "title": "Autoportretas", "body": "Esu degte i\u0161degta Meil\u0117s - \u017Demei ir Dangui, \u017Dmogui ir \u017Dod\u017Eiui...", "link": "/autoportretas" })} <div class="mx-1 flex h-full items-center justify-center md:mx-0 lg:w-200"> ${renderComponent($$result2, "Image", $$Image, { "src": AUTOPORTRETAS, "alt": "Ra\u0161ytoja autoportretas", "class": "imgFadeIn h-full w-full max-w-96 rounded-2xl object-cover sm:h-auto sm:max-w-full" })} </div> </div> </div> <div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col md:flex-row"> ${renderComponent($$result2, "ImageInDiv", $$ImageInDiv, { "img": Pedos_kelyja_, "alt": "Rasytoja nuotrauka" })} ${renderComponent($$result2, "TextDiscriosionButton", $$TextDiscriosionButton, { "title": "P\u0117dos kelyje", "body": "Pirm\u0105syk vie\u0161ai - respublikin\u0117je spaudoje - prabilau trylikamet\u0117", "link": "/pedos-kelyje" })} </div> </div> ` })}`;
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
