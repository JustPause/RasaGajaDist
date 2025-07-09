import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_WWt00ON-.mjs';
import 'kleur/colors';
import { $ as $$LayoutSecondary } from '../../chunks/LayoutSecondary_CXM8OM0G.mjs';
export { renderers } from '../../renderers.mjs';

const $$401 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutSecondary, { "title": "401" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute w-full h-[calc(100vh-64px)] flex items-center justify-center"> <p class="rotate-12 header3 text-8xl hover:-rotate-12 duration-1000">
Reikia daugiau privilegijuv
</p> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/errors/401.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/errors/401.astro";
const $$url = "/errors/401";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$401,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
