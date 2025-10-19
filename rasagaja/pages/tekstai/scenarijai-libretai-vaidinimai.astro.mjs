import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3T3oDyi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_D4JteZMS.mjs';
export { renderers } from '../../renderers.mjs';

const $$ScenarijaiLibretaiVaidinimai = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Surinkti save \u012F sauj\u0105", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="IndexPageOutsideListing"> <div class="IndexPageInsideListing flex-col"> <p class="header">Scenarijai. Libretai. Vaidinimai.</p> <div class="w-full px-8 *:indent-8 sm:max-w-[76.5rem]"> <p>SKRYDIS. Scenarijus antikiniais motyvais. 2009 m.</p> <p>
MONTESUMOS DUKTĖ. Scenarijus indėniškajai septintokų stovyklai. 2011
          m.
</p> <p>
SKAISČIOJI KARALIENĖ. Renesansinio spektaklio 8 kl. scenarijus. 2011
          m.
</p> <p>
ASILIUKAS MUZIKANTAS. Muzikinio spektaklio brolių Grimų pasakos
          motyvais libretas. 2013 m.
</p> <p>
ROMEO IR DŽIULJETA. Renesansinio spektaklio 8 kl. scenarijus. 2014 m.
</p> <p>
SPINDULIUKAS. Muzikinio spektaklio libretas tradicinei Valdorfo
          žibintų šventei. 2014 m.
</p> </div> </div> </div> ` })}`;
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
