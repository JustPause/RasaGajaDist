import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_CQD0AcWy.mjs';
import { a as $$Layout } from './Layout_DV8QEiCP.mjs';

const $$ScenarijaiLibretaiVaidinimai = createComponent(($$result, $$props, $$slots) => {
  const scenarijai = [
    ["SKRYDIS", "Scenarijus antikiniais motyvais. 2009 m."],
    ["MONTESUMOS DUKT\u0116", "Scenarijus ind\u0117ni\u0161kajai septintok\u0173 stovyklai. 2011 m."],
    ["SKAIS\u010CIOJI KARALIEN\u0116", "Renesansinio spektaklio 8 kl. scenarijus. 2011 m."],
    [
      "ASILIUKAS MUZIKANTAS",
      "Muzikinio spektaklio broli\u0173 Grim\u0173 pasakos motyvais libretas. 2013 m."
    ],
    ["ROMEO IR D\u017DIULJETA", "Renesansinio spektaklio 8 kl. scenarijus. 2014 m."],
    [
      "SPINDULIUKAS",
      "Muzikinio spektaklio libretas tradicinei Valdorfo \u017Eibint\u0173 \u0161ventei. 2014 m."
    ]
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Surinkti save \u012F sauj\u0105", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">Scenarijai. Libretai. Vaidinimai.</p> <div class="*:bg-dark-primary-darker flex w-full flex-col gap-4 *:rounded-xl *:p-2 *:uppercase sm:max-w-306"> ${scenarijai.map((scenarijus) => renderTemplate`<p> ${scenarijus[0]}. ${scenarijus[1]} </p>`)} </div> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/scenarijai-libretai-vaidinimai.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/tekstai/scenarijai-libretai-vaidinimai.astro";
const $$url = "/tekstai/scenarijai-libretai-vaidinimai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ScenarijaiLibretaiVaidinimai,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
