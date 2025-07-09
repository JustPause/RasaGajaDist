import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_WWt00ON-.mjs';
import 'kleur/colors';
import { $ as $$LayoutSecondary } from '../../chunks/LayoutSecondary_BwrVyyen.mjs';
export { renderers } from '../../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutSecondary, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-[calc(100vh-256px)] pt-16 overflow-hidden"> <div class="absolute w-full h-[50vh] flex items-center justify-center"> <p class="rotate-12 header1 text-8xl hover:-rotate-12 duration-1000">
404
</p> </div> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/errors/404.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/errors/404.astro";
const $$url = "/errors/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
