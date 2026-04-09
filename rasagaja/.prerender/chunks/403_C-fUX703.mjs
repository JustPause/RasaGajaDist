import { c as createComponent } from './astro-component_B_4uMjuS.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_CQD0AcWy.mjs';
import { a as $$Layout } from './Layout_DV8QEiCP.mjs';

const $$403 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "403" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute flex h-[calc(100vh-64px)] w-full items-center justify-center"> <p class="header3 rotate-12 text-8xl duration-1000 hover:-rotate-12">
Neleista
</p> </div> ` })}`;
}, "/home/justinas/Programming/RasoSvetaine/src/pages/errors/403.astro", void 0);

const $$file = "/home/justinas/Programming/RasoSvetaine/src/pages/errors/403.astro";
const $$url = "/errors/403";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$403,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
