import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3T3oDyi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_D4JteZMS.mjs';
export { renderers } from '../../renderers.mjs';

const $$401 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "401" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute flex h-[calc(100vh-64px)] w-full items-center justify-center"> <p class="header3 rotate-12 text-8xl duration-1000 hover:-rotate-12">
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
