import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_WWt00ON-.mjs';
import 'kleur/colors';
import { $ as $$LayoutSecondary } from '../chunks/LayoutSecondary_CXM8OM0G.mjs';
import { A as Autoportretas_ } from '../chunks/AUTOPORTRETAS_DJkJ4oOP.mjs';
import { P as Pedos_kelyja_ } from '../chunks/PEDOS-KELYJE_xexQQavo.mjs';
export { renderers } from '../renderers.mjs';

const $$ApieSave = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutSecondary, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex *:flex *:flex-col *:gap-10 *:items-center *:transition-all *:duration-300 *:w-1/3 *:h-full *:hover:gap-2 gap-56 mx-14 h-full justify-center"> <a href="/autoportretas" class="hover:pb-8 select-none"> <p class="header1Pavadinimas">Autoportretas</p> <img${addAttribute(Autoportretas_.src, "src")} alt="" srcset="" class="rounded-2xl pt-104 bg-[#FEFEFC]"> </a> <a href="/pedos-kelyje" class="hover:pt-8 select-none"> <img${addAttribute(Pedos_kelyja_.src, "src")} alt="" srcset="" class="rounded-2xl"> <p class="header1Pavadinimas">Pėdos smėlyje</p> </a> </div> ` })}`;
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
