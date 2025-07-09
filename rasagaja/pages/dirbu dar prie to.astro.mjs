import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_WWt00ON-.mjs';
import 'kleur/colors';
import { $ as $$LayoutSecondary } from '../chunks/LayoutSecondary_BwrVyyen.mjs';
export { renderers } from '../renderers.mjs';

const $$DirbuDarPrieTo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutSecondary, { "title": "Dirbu dar prie to" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-[calc(100vh-256px)] pt-16 overflow-hidden"> <div class="absolute w-full h-[50vh] flex items-center justify-center"> <p class="rotate-12 header1 text-8xl hover:-rotate-12 duration-1000">
Dirbu dar prie to
</p> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/Dirbu dar prie to.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/Dirbu dar prie to.astro";
const $$url = "/Dirbu dar prie to";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$DirbuDarPrieTo,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
